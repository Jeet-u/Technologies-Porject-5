import os
import yaml

def correct_yaml_syntax(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    if content.startswith('---'):
        parts = content.split('---')
        if len(parts) > 2:
            yaml_content = parts[1]
            try:
                yaml.safe_load(yaml_content)
            except yaml.YAMLError as e:
                print(f"Error in {file_path}: {e}")
                corrected_yaml = attempt_yaml_correction(yaml_content)
                if corrected_yaml:
                    new_content = '---' + corrected_yaml + '---' + '---'.join(parts[2:])
                    with open(file_path, 'w') as file:
                        file.write(new_content)
                    print(f"Corrected YAML syntax in {file_path}")

def attempt_yaml_correction(yaml_content):
    try:
        # Aquí puedes intentar realizar correcciones automáticas.
        # Por simplicidad, este ejemplo solo intenta cargar y volver a volcar el YAML.
        parsed_yaml = yaml.safe_load(yaml_content)
        return yaml.dump(parsed_yaml)
    except yaml.YAMLError:
        return None

def walk_directory(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.astro'):
                correct_yaml_syntax(os.path.join(root, file))

# Cambia 'src' por el directorio donde están tus archivos .astro
walk_directory('src')

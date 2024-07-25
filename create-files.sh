#!/bin/bash

# Array of file extensions
extensions=(".c" ".c++" ".cbl" ".cs" ".dart" ".erl" ".ex" ".f90" ".go" ".gvy" ".hs" ".java" ".js" ".kt" ".lisp" ".lua" ".m" ".pas" ".php" ".ps1" ".py" ".rb" ".rs" ".sc" ".sh" ".swift" ".ts" ".vb")

# Array of corresponding language folders
language_folders=("c" "cpp" "cobol" "csharp" "dart" "erlang" "elixir" "fortran" "go" "groovy" "haskell" "java" "javascript" "kotlin" "lisp" "lua" "matlab" "pascal" "php" "powershell" "python" "ruby" "rust" "scala" "bash" "swift" "typescript" "vbnet")

# Ask for input name for the file
read -p "Enter file name: " file_name

# Ask if it's an algorithm or data structure
read -p "Is this an algorithm or data structure? (a/d): " type

# Set the base directory based on the type
if [ "$type" == "a" ]; then
    sub_dir="algorithms"
elif [ "$type" == "d" ]; then
    sub_dir="data-structures"
else
    echo "Invalid type. Please enter 'a' for algorithm or 'd' for data structure."
    exit 1
fi

# Loop through the extensions and create files in their corresponding language folders
for i in "${!extensions[@]}"; do
    ext="${extensions[$i]}"
    lang_folder="${language_folders[$i]}"
    file_path="$lang_folder/$sub_dir/$file_name$ext"
    test_file_path="$lang_folder/$sub_dir/$file_name.test$ext"
    
    # Create the language folder and sub-directory if they don't exist
    mkdir -p "$(dirname "$file_path")"
    
    # Create the file
    touch "$file_path"
    
    # Create the test file
    touch "$test_file_path"
done

echo "Files and test files created successfully in their corresponding language folders."

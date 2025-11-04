#python script which finds the text "We be wizards V{version number}, Use however you want, Created by Gilbert Reid" 
# In runScript.js and updates it to the next version number

import re

# Open the file in read mode
with open("runScript.js", "r") as f:
    content = f.read()

# Use regular expression to find the version number
version_number = re.search(r"V(\d+\.\d+\.\d+)", content).group(1)

# Increment the version number
version_number = version_number.split(".")
version_number[-1] = str(int(version_number[-1]) + 1)
version_number = ".".join(version_number)

# Replace the version number in the file
content = re.sub(r"V\d+\.\d+\.\d+", f"V{version_number}", content)

# Write the updated content back to the file
with open("runScript.js", "w") as f:
    f.write(content)
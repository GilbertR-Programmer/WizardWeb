#python script which finds the text "We be wizards V{version number}, Use however you want, Created by Gilbert Reid" 
# In runScript.js and updates it to the next version number

import re

# Open the file in read mode
with open("runScript.js", "r") as runScript:
    content = runScript.read()

# Use regular expression to find the version number
original_version_number = re.search("We be wizards V(\d+)", content).group(0)
print(original_version_number)

# Increment the version number
new_version_number = original_version_number.split("V")
print(new_version_number)
new_version_number[1] = str(int(new_version_number[1]) + 1)
print(new_version_number)
new_version_number = "V".join(new_version_number)
print(new_version_number)

# Replace the version number in the file
content = re.sub(original_version_number, new_version_number, content)

# Write the updated content back to the file
with open("runScript.js", "w") as runScript:
    runScript.write(content)

print("Version number updated to " + new_version_number)

set -e

# Reset
rm ./src/contract/main-amalgama.fc
echo $'' > ./src/contract/main-amalgama.fc

# Utils
cat ./src/contract/modules/utils.fc >> ./src/contract/main-amalgama.fc
echo $'\n' >> ./src/contract/main-amalgama.fc

# Responses
cat ./src/contract/modules/responses.fc >> ./src/contract/main-amalgama.fc
echo $'\n' >> ./src/contract/main-amalgama.fc

# Storage
cat ./src/contract/modules/storage.fc >> ./src/contract/main-amalgama.fc
echo $'\n' >> ./src/contract/main-amalgama.fc

# Get Methods
cat ./src/contract/modules/get.fc >> ./src/contract/main-amalgama.fc
echo $'\n' >> ./src/contract/main-amalgama.fc

# Main
cat ./src/contract/main.fc >> ./src/contract/main-amalgama.fc
echo $'\n' >> ./src/contract/main-amalgama.fc

# Compile
ton-compiler --fift --output ./src/contract/pool.fif --input ./src/contract/main-amalgama.fc
ton-compiler --output ./src/contract/main.cell --input ./src/contract/main-amalgama.fc
openssl base64 -A -in ./src/contract/main.cell  -out ./src/contract/main.cell.base64
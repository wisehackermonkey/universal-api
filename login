if  test -f  ~/.ssh/id_rsa.pub; then
    echo "key exists"
else
    echo "key doesnt exist"
    echo "what is your email?"
    read email
    
    ssh-keygen -t rsa -C $email -f ~/.ssh/id_rsa -P ""
    
fi
KEY=$( cat ~/.ssh/id_rsa.pub )
TITLE=${KEY/* }
# the '/* ' above deletes every character in $KEY up to and including the last
# space.

JSON=$( printf '{"title": "%s", "key": "%s"}' "$TITLE" "$KEY" )

TOKEN=$( cat ./tokenfile.txt )

echo "adding your ssh key to github.com"
RESPONSE=$(curl -H "Authorization: token $TOKEN"  --data "$JSON" https://api.github.com/user/keys )
# echo "import json; print(json.load('${RESPONSE//[$'\t\r\n']}')['errors'][0]['message'])"
if python3 -c "import json; json.loads('${RESPONSE//[$'\t\r\n']}')['errors'][0]['message']";then
    
    echo "You Aready have that key added to your account!"
    python3 -c "import json; print('github says:',json.loads('${RESPONSE//[$'\t\r\n']}')['errors'][0]['message'])"
    exit
else
    echo "Error something went wrong, do you have a file called tokenfile.txt? does it have yourgithub token? does the token have ssh perms on it?"
    echo "error message"
    echo $RESPONSE
fi
# echo  "Authorization: token $TOKEN $JSON https://api.github.com/user/keys"

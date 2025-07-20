#!/bin/zsh

# Copy me to your project folder. Rename the session variable below and chmod +x it. Run it.
# Make sure tmux is installed
# Make sure to change the server command to the command you like. If no server, then leave it as exec /bin/zsh or /bin/bash

SESSION="varun_github_io"
echo "Starting work environment for $SESSION. Checking if it exists ..."

#V1 of script to start my tmux session
tmux has-session -t $SESSION &> /dev/null

if [ $? != 0 ]; then
    echo "Tmux session does not exist. Creating new as per instructions"
    
    # Change this to server of choice or keep it as "lsa; exec /bin/zsh"
    tmux new-session -d -s "$SESSION" -n server "pnpm run dev; exec /bin/zsh"
    tmux new-window -t "$SESSION:" -n nvim "nvim"
    tmux new-window -t "$SESSION:" -n claude "$HOME/.claude/local/claude"
    tmux new-window -t "$SESSION:" -n term "exec /bin/zsh"
fi

echo "Session $SESSION already exists. Connecting to it"

# Attach to the session
tmux attach-session -t "$SESSION"

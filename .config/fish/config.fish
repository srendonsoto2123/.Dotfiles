if status is-interactive
    # Commands to run in interactive sessions can go here
    set -Ux STARSHIP_CONFIG $HOME/.config/starship/starship.toml
    starship init fish | source

    zoxide init fish | source
end


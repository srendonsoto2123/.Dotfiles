set -gx GPG_TTY (tty)

set -gx SUDO_PROMPT "󰌾 Password: "
set -gx TERMINAL "kitty"
set -gx BROWSER "brave"
set -gx VISUAL "nvim"
set -gx EDITOR "nvim"

set -gx XDG_CONFIG_HOME "$HOME/.config"
set -gx XDG_CACHE_HOME "$HOME/.cache"
set -gx XDG_DATA_HOME "$HOME/.local/share"
set -gx XDG_STATE_HOME "$HOME/.local/state"
set -gx XDG_CONFIG_DIRS "/etc/xdg"
set -gx XDG_DATA_DIRS "/usr/local/share:/usr/share:/var/lib/flatpak/exports/share:$XDG_DATA_HOME/flatpak/exports/share"
set -gx XDG_RUNTIME_DIR "/run/user/$(id -u)"
set -gx XDG_DESKTOP_DIR "$HOME/Escritorio"
set -gx XDG_DOWNLOAD_DIR "$HOME/Descargas"
set -gx XDG_TEMPLATES_DIR "$HOME/Plantillas"
set -gx XDG_PUBLICSHARE_DIR "$HOME/Public"
set -gx XDG_DOCUMENTS_DIR "$HOME/Documents"
set -gx XDG_MUSIC_DIR "$HOME/Music"
set -gx XDG_PICTURES_DIR "$HOME/Pictures"
set -gx XDG_VIDEOS_DIR "$HOME/Videos"

set -gx FZF_DEFAULT_OPTS "
  --color fg:#cdd6f4
  --color fg+:#cdd6f4
  --color bg:#1e1e2e
  --color bg+:#313244
  --color hl:#f38ba8
  --color hl+:#f38ba8
  --color info:#cba6f7
  --color prompt:#cba6f7
  --color spinner:#f5e0dc
  --color pointer:#f5e0dc
  --color marker:#f5e0dc
  --color border:#1e1e2e
  --color header:#f38ba8
  --prompt ' '
  --pointer ' λ'
  --layout=reverse
  --border horizontal
  --height 40"

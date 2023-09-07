instalar() {
  if [[ ! -x "$(command -v pacman)" ]]; then
    echo 'Estoy fallando'
  fi

  declare -n paquetes="$1"

  for app in "${paquetes[@]}"; do
    pacman -S app
  done
}

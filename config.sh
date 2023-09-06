#!/bin/bash

_hacer_enlace_simbolico() {
  local LOCATION=$1
  local NAME=$2
  local CARPETA="prueba"
  if [[ -z "$LOCATION" ]]; then
    echo "Ha ocurrido un error tenga más cuidado"
  else
    if [[ ! -d "$HOME/$CARPETA" ]]; then
      /bin/mkdir "$HOME/$CARPETA"
    fi

    if [[ -d "$LOCATION" ]]; then
      echo "Haciendo enlace :3"
      ln -sv "$LOCATION" "$HOME/$CARPETA/$NAME"
      echo "$LOCATION configurado en la carpeta $NAME"
    elif [[ "$LOCATION" != *"config.sh"* ]]; then
      ln -sv "$LOCATION" "$HOME/$CARPETA/$NAME"
    else
      echo "Ocurrio un error parcero"
    fi
  fi
}

_configurar_dotfiles() {
  local ARCHIVOS=( * )
  for LOCATION in "${ARCHIVOS[@]}"; do
    echo "Haciendo el enlace simbolico para: "
    echo "$PWD/$LOCATION"
    _hacer_enlace_simbolico "$PWD/$LOCATION" "$LOCATION"
  done
}

_configurar_dotfiles

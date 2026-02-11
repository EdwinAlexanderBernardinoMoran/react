# Guía de Instalación de GitHub Copilot en NvChad

## Requisitos Previos
- Node.js >= 18 (ya tienes v24.11.1 ✅)
- NvChad instalado
- Suscripción activa de GitHub Copilot

## Pasos de Instalación

### 1. Crear el archivo de configuración del plugin

Crea el siguiente archivo en tu configuración de NvChad:

**Ruta:** `~/.config/nvim/lua/plugins/copilot.lua`

```lua
return {
  {
    "zbirenbaum/copilot.lua",
    cmd = "Copilot",
    event = "InsertEnter",
    config = function()
      require("copilot").setup({
        suggestion = {
          enabled = true,
          auto_trigger = true,
          debounce = 75,
          keymap = {
            accept = "<M-l>",      -- Alt+l para aceptar sugerencia
            accept_word = "<M-w>", -- Alt+w para aceptar palabra
            accept_line = "<M-j>", -- Alt+j para aceptar línea
            next = "<M-]>",        -- Alt+] para siguiente sugerencia
            prev = "<M-[>",        -- Alt+[ para sugerencia anterior
            dismiss = "<C-]>",     -- Ctrl+] para descartar
          },
        },
        panel = {
          enabled = true,
          auto_refresh = false,
          keymap = {
            jump_prev = "[[",
            jump_next = "]]",
            accept = "<CR>",
            refresh = "gr",
            open = "<M-CR>"
          },
        },
        filetypes = {
          yaml = false,
          markdown = false,
          help = false,
          gitcommit = false,
          gitrebase = false,
          hgcommit = false,
          svn = false,
          cvs = false,
          ["."] = false,
        },
        copilot_node_command = 'node', -- Node.js version debe ser > 18.x
        server_opts_overrides = {},
      })
    end,
  },
}
```

### 2. Crear el directorio si no existe

```bash
mkdir -p ~/.config/nvim/lua/plugins
```

### 3. Copiar la configuración

Copia el contenido de arriba en el archivo:

```bash
nvim ~/.config/nvim/lua/plugins/copilot.lua
```

Pega la configuración y guarda (`:wq`)

### 4. Reiniciar Neovim

Cierra y vuelve a abrir Neovim. Lazy.nvim instalará automáticamente el plugin.

### 5. Autenticar con GitHub

Una vez en Neovim, ejecuta:

```vim
:Copilot auth
```

Esto abrirá tu navegador o te dará un enlace. Sigue estos pasos:
1. Copia el código que aparece en Neovim
2. Abre el enlace en tu navegador
3. Pega el código y autoriza
4. Vuelve a Neovim

### 6. Verificar instalación

Ejecuta en Neovim:

```vim
:Copilot status
```

Deberías ver: `Copilot: Ready`

## Atajos de Teclado Configurados

### Sugerencias
- `Alt + l` - Aceptar sugerencia completa
- `Alt + w` - Aceptar solo la palabra
- `Alt + j` - Aceptar solo la línea
- `Alt + ]` - Siguiente sugerencia
- `Alt + [` - Sugerencia anterior
- `Ctrl + ]` - Descartar sugerencia

### Panel de Copilot
- `Alt + Enter` - Abrir panel
- `Enter` - Aceptar sugerencia del panel
- `[[` - Saltar a sugerencia anterior
- `]]` - Saltar a siguiente sugerencia
- `gr` - Refrescar sugerencias

## Comandos Útiles

```vim
:Copilot status        " Ver estado de conexión
:Copilot auth          " Autenticar/reautenticar
:Copilot disable       " Desactivar temporalmente
:Copilot enable        " Activar
:Copilot panel         " Abrir panel de sugerencias
```

## Personalización Adicional

### Cambiar atajos de teclado

Si prefieres usar `Tab` para aceptar (pero puede conflictuar con autocompletado):

```lua
keymap = {
  accept = "<Tab>",
  -- ... resto de atajos
}
```

### Activar en más tipos de archivo

Modifica la sección `filetypes` en la configuración, cambia `false` a `true` para los archivos donde quieras Copilot.

### Desactivar sugerencias automáticas

```lua
suggestion = {
  enabled = true,
  auto_trigger = false,  -- Cambia a false
  -- ...
}
```

Luego usa `:Copilot suggestion` para activar manualmente.

## Solución de Problemas

### Copilot no aparece
1. Verifica Node.js: `node --version` (debe ser >= 18)
2. Verifica autenticación: `:Copilot status`
3. Reinicia el servidor LSP: `:Copilot restart`

### Conflicto con Tab
Si Tab no funciona en autocompletado, cambia el atajo de Copilot a otro (como `<M-l>`).

### No se instala el plugin
1. Abre Neovim
2. Ejecuta `:Lazy sync`
3. Espera a que termine la instalación

## Alternativa: Copilot con nvim-cmp

Si usas nvim-cmp (autocompletado), también puedes integrar:

```lua
-- Agregar este plugin adicional
{
  "zbirenbaum/copilot-cmp",
  after = { "copilot.lua" },
  config = function()
    require("copilot_cmp").setup()
  end
}
```

Luego en tu configuración de nvim-cmp, agrega:

```lua
sources = {
  { name = "copilot", group_index = 2 },
  -- ... otras fuentes
}
```

---

**Nota:** Asegúrate de tener una suscripción activa de GitHub Copilot en tu cuenta de GitHub.

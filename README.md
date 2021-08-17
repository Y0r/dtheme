# Plain Drupal Theme

This theme can be used as base for starting development of front-end part in Drupal 8/9.
The main requirements is NPM, Drupal 8/9 and knowledge of SCSS/CSS, Twig and YML.

## Installation

Place folder with theme into Drupal. By default: /web/themes/custom

```
.
├── config                            # The folder that contains configuration files.
├── web                               # The main folder with core and custom code.
│   ├── core                          # Drupal Core
│   ├── modules                       # Folder with modules
│   ├── libraries                     # Folder with JS libraries.
│   ├── themes                        # Folder that contains custom and contrib themes.
│   │   ├── contrib                   # Folder with contrib themes from Drupal.org and private repositories.
│   │   └── custom                    # Folder with custom themes that extends and overrides contrib themes.
│   │       └── dtheme                # Your custom drupal theme.
│   └── ...                           # etc.
└── ...
```

After that need to install all requirements for Gulp.
With Gulp you can compilate SCSS into CSS.

```
npm install
```

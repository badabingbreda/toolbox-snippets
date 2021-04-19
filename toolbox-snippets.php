<?php
/**
 * Toolbox Snippets
 *
 * @package     toolbox-snippets
 * @author      Badabingbreda
 * @license     GPL-2.0+
 *
 * @wordpress-plugin
 * Plugin Name: Toolbox Snippets
 * Plugin URI:  https://www.badabing.nl
 * Description: Toolbox Ace Snippets
 * Version:     1.0.0
 * Author:      Badabingbreda
 * Author URI:  https://www.badabing.nl
 * Text Domain: toolbox-snippets
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
define( 'TOOLBOXSNIPPETS_VERSION', '1.0.0' );
define( 'TOOLBOXSNIPPETS_DIR', plugin_dir_path( __FILE__ ) );
define( 'TOOLBOXSNIPPETS_FILE', __FILE__ );
define( 'TOOLBOXSNIPPETS_URL', plugins_url( '/', __FILE__ ) );

add_action( 'wp_enqueue_scripts'            ,      'snippets_register_scripts' , 200 );

function snippets_register_scripts() {
    
    if ( !class_exists( 'FLBuilderModel' ) || !\FLBuilderModel::is_builder_active() ) return;
    wp_enqueue_script( 'toolbox-snippets-uikit', TOOLBOXSNIPPETS_URL . 'js/uikit-snippets.js', [ 'wp-element' ], TOOLBOXSNIPPETS_VERSION, false );
    wp_enqueue_script( 'toolbox-snippets-query', TOOLBOXSNIPPETS_URL . 'js/query-snippets.js', [ 'wp-element' ], TOOLBOXSNIPPETS_VERSION, false );
    wp_enqueue_script( 'toolbox-snippets-picsum', TOOLBOXSNIPPETS_URL . 'js/picsum-snippets.js', [ 'wp-element' ], TOOLBOXSNIPPETS_VERSION, false );
}

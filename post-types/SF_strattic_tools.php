<?php


class SF_strattic_tools extends SF_abstract_post
{
  public static $name = 'Strattic tools';
  public static $slug = 'strattic_tools';

  public function createPost()
  {
    $labels = array(
      'name' => _x(self::$name, 'tag'),
      'singular_name' => _x(self::$name, 'tag'),
      'add_new' => _x('Add Strattic tool', 'tag'),
      'add_new_item' => _x('Add Strattic tool', 'tag'),
      'edit_item' => _x('Edit Strattic tool', 'tag'),
      'new_item' => _x('New Strattic tool', 'tag'),
      'view_item' => _x('Show Strattic tool', 'tag'),
      'search_items' => _x('Search Strattic tool', 'tag'),
      'not_found' => _x('Not found', 'tag'),
      'not_found_in_trash' => _x('No found in trash', 'tag'),
      'parent_item_colon' => _x('Parent:', 'tag'),
      'menu_name' => _x(self::$name, 'tag'),
    );

    $args = array(
      'labels' => $labels,
      'hierarchical' => false,
      'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
      'taxonomies'  => array( 'category' ),
      'public' => true,
      'show_ui' => true,
      'show_in_menu' => true,
      'menu_position' => 45,
      'menu_icon' => 'dashicons-welcome-write-blog',
      'show_in_nav_menus' => true,
      'publicly_queryable' => true,
      'exclude_from_search' => true,
      'has_archive' => true,
      'query_var' => false,
      'can_export' => true,
      'capability_type' => 'post',
      'show_in_rest' => true,
    );

    register_post_type(self::$slug, $args);
  }
}
new SF_strattic_tools();

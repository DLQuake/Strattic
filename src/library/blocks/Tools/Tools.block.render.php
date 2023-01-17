<?php

function acf_block_render_callback_Tools($block)
{
    $slug = str_replace('acf/', '', $block['name']);

    $context = Timber::get_context();
    $context['block'] = $block;
    $context['fields'] = get_fields();
    $current_category = $_GET['category_name'];
    if(empty($current_category)){
        $current_category = null;
        $category_name = 'All';
    }
    else
    {
        $category_name = str_replace('-',' ', $current_category);
        $category_name = strtoupper($category_name);
    }

    $args = array(
        'post_type' => "strattic_tools",
        'orderby'        => 'rand',
        'category_name' => $current_category,
        'post_status' => array('publish')
        );
        $args = new WP_Query( $args );
        $args = $args->posts;
        $counter = 0;
        foreach ($args as $arg)
        {
            $title = get_the_title($arg->ID);
            $excerpt = get_the_excerpt($arg->ID);
            $image = get_the_post_thumbnail_url($arg->ID,'');
            $url_post = get_the_permalink($arg->ID);
            $table[$counter]=array('title_post' => $title, 'post_excerpt' => $excerpt, 'post_image' => $image, 'url_post' => $url_post);
            $counter++;
        }
        $context['args'] = $table;
        $crumbs[0] = array('link' => home_url(), 'text' => 'Home' );
        $crumbs[1] = array('link' => home_url().'/help-center/', 'text' => 'Help Center');
        $crumbs[2] = array('link' => '', 'text' => $category_name);
        $context['crumbs'] = $crumbs;
    Timber::render('./Tools.block.view.twig', $context);
}
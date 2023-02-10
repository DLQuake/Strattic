<?php

function acf_block_render_callback_Team($block)
{
    $slug = str_replace('acf/', '', $block['name']);

    $context = Timber::get_context();
    $context['block'] = $block;
    $context['fields'] = get_fields();

    $args = array(
        'post_type' => "team",
        'orderby' => 'rand',
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

    Timber::render('./Team.block.view.twig', $context);
}
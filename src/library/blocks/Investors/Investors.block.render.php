<?php

function acf_block_render_callback_Investors($block)
{
    $slug = str_replace('acf/', '', $block['name']);

    $context = Timber::get_context();
    $context['block'] = $block;
    $context['fields'] = get_fields();

    Timber::render('./Investors.block.view.twig', $context);
}
<?php

namespace App\Widgets;

use Arrilot\Widgets\AbstractWidget;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use TCG\Voyager\Facades\Voyager;

class Reposos extends AbstractWidget
{
    /**
     * The configuration array.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Treat this method as a controller action.
     * Return view() or other content to display.
     */
    public function run()
    {
        $count = \App\Reposo::count();
        $string = trans_choice('voyager::dimmer.reposo', $count);

        return view('voyager::dimmer', array_merge($this->config, [
            'icon'   => 'voyager-archive',
            'title'  => "{$count} {$string}",
            'text'   => __('voyager::dimmer.reposos_text', ['count' => $count, 'string' => Str::lower($string)]),
            'button' => [
                'text' => __('voyager::dimmer.reposos_link_text'),
                'link' => route('voyager.reposos.index'),
            ],
            'image' => 'images/reposos-bg.jpg',
        ]));
    }

    /**
     * Determine if the widget should be displayed.
     *
     * @return bool
     */
    public function shouldBeDisplayed()
    {
        return true;
    }
}

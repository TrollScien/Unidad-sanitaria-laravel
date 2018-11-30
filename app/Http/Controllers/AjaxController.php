<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Trabajadore;
use Carbon\Carbon;

class AjaxController extends Controller
{

    public function vacaciones(Request $request)
    {
      $cedula = $request->trabajador;
      $trabajador = Trabajadore::where('cedula', $cedula)->first();
      $años = Carbon::parse($trabajador['fechaingreso'])->age;
      return $años;
    }

    public function trabajador(Request $request)
    {
      $cedu = $request->cedula;
      $trabajador = Trabajadore::where('cedula', $cedu)->get();

      if(count($trabajador) > 0)
      {
        echo 1;
      }
      else
        echo 0;
    }

}

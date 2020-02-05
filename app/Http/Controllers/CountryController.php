<?php

namespace App\Http\Controllers;

use App\Country;
use App\Http\Resources\Country as CountryResource;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CountryController extends Controller
{
    public function index()
    {
        // $this->authorize('viewAny', Country::class);

        return CountryResource::collection(request()->user()->country);
    }

    public function store()
    {
        // $this->authorize('create', Country::class);

        $country = request()->user()->country()->create($this->validateData());

        return (new CountryResource($country))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function show(Country $country)
    {
        // $this->authorize('view', $country);

        return new CountryResource($country);
    }

    public function update(Country $country)
    {
        // $this->authorize('update', $country);

        $country->update($this->validateData());

        return (new CountryResource($country))
            ->response()
            ->setStatusCode(Response::HTTP_OK);
    }

    public function destroy(Country $country)
    {
        // $this->authorize('delete', $country);

        $country->delete();

        return response([], Response::HTTP_NO_CONTENT);
    }

    private function validateData()
    {
        return request()->validate([
            'name' => 'required',
            'Alpha2Code' => 'required',
            'Alpha3Code' => 'required',
            'CallingCode' => 'required',
            'Demonym' => 'required',
            'Flag' => 'required',
        ]);
    }
}

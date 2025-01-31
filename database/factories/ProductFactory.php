<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(1),
            'amount' => $this->faker->randomNumber(4),
            'price' => $this->faker->randomFloat(3,1,100),
            'image' => "https://picsum.photos/id/".$this->faker->randomNumber(3)."/300/300"
        ];
    }
}

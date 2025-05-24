<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Contact;
use App\Models\Organization;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

final class ContactsTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'johndoe@example.com',
        ]);

        $organization = Organization::create(['name' => 'Example Organization Inc.']);

        Contact::create([
            'organization_id' => $organization->id,
            'first_name' => 'Martin',
            'last_name' => 'Abbott',
            'email' => 'martin.abbott@example.com',
            'phone' => '555-111-2222',
            'address' => '330 Glenda Shore',
            'city' => 'Murphyland',
            'region' => 'Tennessee',
            'country' => 'US',
            'postal_code' => '57851',
        ]);

        Contact::create([
            'organization_id' => $organization->id,
            'first_name' => 'Lynn',
            'last_name' => 'Kub',
            'email' => 'lynn.kub@example.com',
            'phone' => '555-333-4444',
            'address' => '199 Connelly Turnpike',
            'city' => 'Woodstock',
            'region' => 'Colorado',
            'country' => 'US',
            'postal_code' => '11623',
        ]);
    }

    public function test_can_view_contacts(): void
    {
        $this->actingAs($this->user)
            ->get('/contacts')
            ->assertInertia(fn (Assert $assert) => $assert
                ->component('contacts/index')
                ->has('contacts.data', 2)
                ->has('contacts.data.0', fn (Assert $assert) => $assert
                    ->has('id')
                    ->where('name', 'Martin Abbott')
                    ->where('phone', '555-111-2222')
                    ->where('city', 'Murphyland')
                    ->where('deleted_at', null)
                    ->where('organization.name', 'Example Organization Inc.')
                )
                ->has('contacts.data.1', fn (Assert $assert) => $assert
                    ->has('id')
                    ->where('name', 'Lynn Kub')
                    ->where('phone', '555-333-4444')
                    ->where('city', 'Woodstock')
                    ->where('deleted_at', null)
                    ->where('organization.name', 'Example Organization Inc.')
                )
            );
    }

    public function test_can_search_for_contacts(): void
    {
        $this->actingAs($this->user)
            ->get('/contacts?search=Martin')
            ->assertInertia(fn (Assert $assert) => $assert
                ->component('contacts/index')
                ->where('filters.search', 'Martin')
                ->has('contacts.data', 1)
                ->has('contacts.data.0', fn (Assert $assert) => $assert
                    ->has('id')
                    ->where('name', 'Martin Abbott')
                    ->where('phone', '555-111-2222')
                    ->where('city', 'Murphyland')
                    ->where('deleted_at', null)
                    ->where('organization.name', 'Example Organization Inc.')
                )
            );
    }

    public function test_cannot_view_deleted_contacts(): void
    {
        Contact::where('first_name', 'Martin')->first()->delete();

        $this->actingAs($this->user)
            ->get('/contacts')
            ->assertInertia(fn (Assert $assert) => $assert
                ->component('contacts/index')
                ->has('contacts.data', 1)
                ->where('contacts.data.0.name', 'Lynn Kub')
            );
    }

    public function test_can_filter_to_view_deleted_contacts(): void
    {
        Contact::where('first_name', 'Martin')->first()->delete();

        $this->actingAs($this->user)
            ->get('/contacts?trashed=with')
            ->assertInertia(fn (Assert $assert) => $assert
                ->component('contacts/index')
                ->has('contacts.data', 2)
                ->where('contacts.data.0.name', 'Martin Abbott')
                ->where('contacts.data.1.name', 'Lynn Kub')
            );
    }
}

import { TestBed, inject } from '@angular/core/testing';

import { PokemonDetailService } from './pokemon-detail.service';

describe('PokemonDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonDetailService]
    });
  });

  it('should be created', inject([PokemonDetailService], (service: PokemonDetailService) => {
    expect(service).toBeTruthy();
  }));
});

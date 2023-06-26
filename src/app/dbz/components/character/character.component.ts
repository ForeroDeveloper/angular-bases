import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent {
  public chacter: Character = {
    name: '',
    power: 0,
  };

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter(): void {
    if (this.chacter.name.length === 0) return;

    this.onNewCharacter.emit(this.chacter);

    this.chacter = { name: '', power: 0 };
  }
}

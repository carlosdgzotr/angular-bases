import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-add-form',
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0 
  };

  emitCharacter():void {
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
  };

  

}

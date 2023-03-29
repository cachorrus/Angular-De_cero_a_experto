import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {
  //htmlElemet: ElementRef<HTMLElement>;

  //Si necesitaramos los valores dentro de otro metodo
  //por ejemplo cuando no son enviados los input
  //el color y mensaje seran establecidos por defecto
  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }
  @Input() set message( valor: string ) {    
    this._mensaje = valor;
    this.setMessage();
  };

  @Input() set valido( valor: boolean ) {    
    //this.htmlElement.nativeElement.hidden = !value;
    if (valor) {
      //this.render.setAttribute(this.el.nativeElement, 'hidden', 'hidden');
      this.render.addClass(this.el.nativeElement, 'invisible')
    } else {
      //this.render.removeAttribute(this.el.nativeElement, 'hidden');
      this.render.removeClass(this.el.nativeElement, 'invisible');
    } 
  };

  constructor( private el: ElementRef<HTMLElement>,
              private render:Renderer2
  ) { 
    //this.htmlElemet = el;    
  }

  ngOnInit(): void {   
    this.setColor();
    this.setMessage(); 
    this.setClass();
  }

  setClass(): void {
    this.render.addClass(this.el.nativeElement, 'form-text');
  }

  setColor(): void {
    //this.htmlElemet.nativeElement.style.color =  this.color;
    //this.htmlElemet.nativeElement.classList.add('form-text');
    this.render.setStyle(this.el.nativeElement, 'color',this._color);
  }

  setMessage(): void {
    //this.htmlElemet.nativeElement.innerHTML = this.message;
    this.render.setProperty(this.el.nativeElement, 'innerHTML',this._mensaje);
  }

}

import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //Data del Select
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel comics',
      desc: 'Marvel - comics'
    }
  ]

  //Data del Formulario
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router, private toastr: ToastrService, private snackbar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) { 
      return;
    }

    //obtengo el id de la URL
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroePorId(id))
      )
      .subscribe(heroe => this.heroe = heroe);

  }

  guardar() {
    
    if (this.heroe.superhero.trim().length === 0) { 
      return;
    }

    //Bandera para saber si estoy editando o agregando
    if ( this.heroe.id ) {
      //Actualizar
       this.heroesService.actualizarHeroe(this.heroe)
         .subscribe(heroe => {

        this.mostrarSnackbar('heroe Actualizado');
        
        this.toastr.success(`El heroe ${heroe.superhero} ha sido actualizado`, 'Actualizacion');
        
      });

    } else {
      //Crear
       this.heroesService.agregarHeroe(this.heroe)
         .subscribe(heroe => {

           this.mostrarSnackbar('heroe Creado');
        
            this.toastr.success(`El heroe ${heroe.superhero} ha sido creado`, 'Creacion de Heroe');
        
        this.router.navigate(['/heroes/editar', heroe.id]);
        
      });

    }

   
    
  }

  borrarHeroe() { 

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px'
    })

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) { 
          this.heroesService.borrarHeroe(this.heroe.id!)
            .subscribe(resp => {
              this.toastr.info('Superheroe ha sido eliminado');
            this.router.navigate(['/heroes']);
          });
        }
      }
    );

    /**/
  }

  mostrarSnackbar(mensaje: string) { 
    this.snackbar.open(mensaje, 'ok', {
      duration: 5000,
      data: this.heroe
    });
  }

}

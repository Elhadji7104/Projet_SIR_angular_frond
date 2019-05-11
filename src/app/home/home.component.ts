import {Component, Inject, OnInit} from '@angular/core';
import {SondageService} from '../services/sondage.service';
import {ActivatedRoute, Route} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import DateTimeFormat = Intl.DateTimeFormat;
import {DatepickerViewModel} from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import {templateJitUrl} from '@angular/compiler';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/typings/esm5/collections';
import {ngbFocusTrap} from '@ng-bootstrap/ng-bootstrap/util/focus-trap';
import {forEach} from '@angular/router/src/utils/collection';
import {of} from 'rxjs';
import {SelectItem} from 'primeng/api';
import {Router} from '@angular/router';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class HomeComponent implements OnInit {
  // tableau sondage
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  idSondage = {} ;
  /*date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  serializedDateTime = new FormControl((new Date().getTime() ).toString());*/
  index = 0;
  user = {
    mail: '',
  };
  ajouterDateok = 0;
  login;
  sondage = {
    lienWeb: '',
  };
  listeDateProposees: any;
  mail: '';
  sondagesCree;
  sondagePost;
  sondageEncours;
  dateproposeeTest;
  dateproposee = {
    dateSondage: '',
    heureDebut: '',
    heureFin: ''
  };
  animal: string;
  name: string;
  cols = [
    { idDate: 'idDate' , field: 'dateSondage', header: 'date Sondage' },
    { idDate: 'idDate' , field: 'heureDebut', header: 'Heure début' },
    { idDate: 'idDate' , field: 'heureFin', header: 'Heure Fin' },
  ];

 // private fieldArray: Array<any> = [];
  private fieldArray: SelectItem[] = [];

  private newAttribute: any = {};
  selectedCar1: any;

  data = this.listeDateProposees;

  public dtSelectedRows: any[];
  private listeDateProposees2: any;
  private selectedDate: [];
  private dataParticipant: any;
  rowData: any;
  test: false;
  private idSondageActuel: any;
  // data = this.listeDateProposees2;
  setSelectedItem() {
    this.dtSelectedRows = [this.data[0]];
  }

  removeUnvalidItem() {
    if (this.dtSelectedRows) {
      this.dtSelectedRows = this.dtSelectedRows.filter(car => car.year > 2005 );
    }
  }

  constructor(private router: ActivatedRoute, private route: Router, private sondageService: SondageService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog ) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      height: '200px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  ngOnInit() {
    // this.login = 'fallgora.egf@gmail.com';
    const login = this.router.snapshot.paramMap.get('userLogin');
    this.user.mail = login ;
    console.log('userLogin' + JSON.stringify(this.user));
   // this.idSondage = 1;
    this.sondageService.getAllSondageByUser(this.user.mail).subscribe(data => {
      this.sondagesCree = data;
      // console.log('data' + JSON.stringify(data));
    });
    this.sondageService.getAllSondage().subscribe(data => {
      this.sondageEncours = data;
    });
    // pour le formulaire
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
      lienWeb: new FormControl(),
      login: new FormControl()
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
      dateSondage: new FormControl(),
      hdebut: new FormControl(),
      hfin: new FormControl(),
    });
  }
  saveSondage(mail: any , sondage: any) {
     this.sondageService.create(this.user.mail, this.sondage).subscribe(data => {
     this.sondagePost = data;
     console.log(this.sondage);
     console.log('data' , JSON.stringify(data));
    });
  }
  getAllsondage() {

  }
  getlisteSondagebyUser(mail: any) {
    this.sondageService.getAllSondageByUser(mail).subscribe(data => {
      this.sondagesCree = data;
      console.log('data' + JSON.stringify(data));
    });
  }
  getListDateProposee(idSondage: any) {
    this.sondageService.getDateProposses(idSondage).subscribe(dataDate => {
      this.listeDateProposees = dataDate;
      console.log('data' + JSON.stringify(dataDate));
    });
  }

  // ajouter la date
  ajouterDate(dateproposee: any) {
    this.idSondage = this.sondageService.getidSondage().subscribe(data => {
      this.idSondage = data;
      console.log('datafinale', this.idSondage);
      this.sondageService.addDateproposee(this.idSondage, dateproposee).subscribe(datadate => {
        this.dateproposeeTest = datadate;
        console.log('datapropose',  this.dateproposeeTest);
        this.getListDateProposee(this.idSondage);
        this.ajouterDateok = 1;
      });
    });
  }
  addFieldValue(newId: any) {
    this.fieldArray.push(newId);
    console.log('newadded', newId);
    console.log('newtab', this.fieldArray);
    this.newAttribute = {};
  }
  sauveParticipation() {
      for (const value of this.fieldArray) {
        this.sondageService.addParticipant(this.idSondageActuel , value , this.user ).subscribe(data => {
          this.dataParticipant = data;
          console.log('dataparticipant', JSON.stringify(this.dataParticipant));
        });
      }
      // const id = this.router.snapshot.paramMap.get('id');
      this.route.navigate(['home']);
  }
  deconnexion() {
    this.route.navigate(['login']);
  }
  closePannel() {
    // const id = this.router.snapshot.paramMap.get('id');
    this.route.navigate(['home']);
  }
  getListDateProposee2(idSondage: any) {
    // this.data = this.getListDateProposee(idSondage);
    this.idSondageActuel = idSondage ;
    console.log('d', JSON.stringify(this.getListDateProposee(idSondage)));
  }
}


const typeDecorator = Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
});

@typeDecorator
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    onNoClick(): void {
    this.dialogRef.close();
    }

}

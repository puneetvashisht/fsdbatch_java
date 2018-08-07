import { async, ComponentFixture, TestBed, fakeAsync, tick, flush, flushMicrotasks } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../user.service';
import { DataService } from '../data.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user service and user component names are same', () => {
    let userService: UserService = new UserService()
    // expect(component.name).toBe(userService.user.name);
    expect(component.user.name).toEqual(userService.user.name);
  });

  it('user service and component are same - DI ', ()=> {
    let userService: UserService = fixture.debugElement.injector.get(UserService);
    expect(component.user.name).toEqual(userService.user.name)
  })

  it('user component should display user name', ()=>{
    component.loggedIn= true;
    fixture.detectChanges();
    let compiled = fixture.nativeElement;
    console.log(compiled.querySelector('p').textContent);
    expect(compiled.querySelector('p').textContent).toContain(component.user.name)
  })

  it("user component should'nt display user name", ()=>{
    // component.loggedIn= true;
    // fixture.detectChanges();
    let compiled = fixture.nativeElement;
    console.log(compiled.querySelector('p').textContent);
    expect(compiled.querySelector('p').textContent).not.toContain(component.user.name)
  })


  it('testing asych service method, dont expect this pass ', async(()=> {
    let dataService: DataService = fixture.debugElement.injector.get(DataService);
    //Mocking
    let spy = spyOn(dataService, 'fetchData')
        .and.returnValue(Promise.resolve('Data'))

    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(component.data).toBe('Data');
    })
    
   
  // }))


  

});

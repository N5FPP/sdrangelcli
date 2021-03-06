import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirspyhfComponent } from './airspyhf.component';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonComponentsModule } from '../../common-components/common-components.module';

describe('AirspyhfComponent', () => {
  let component: AirspyhfComponent;
  let fixture: ComponentFixture<AirspyhfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AirspyhfComponent,
      ],
      imports: [
        RouterModule,
        FormsModule,
        MatCardModule,
        MatSelectModule,
        MatOptionModule,
        MatCheckboxModule,
        MatTooltipModule,
        HttpClientTestingModule,
        CommonComponentsModule
      ],
      providers: [
        {provide: ActivatedRoute, useValue: { snapshot: {parent: {params: {dix: 0}}}}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirspyhfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
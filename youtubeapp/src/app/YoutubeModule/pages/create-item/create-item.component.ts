import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IOneItem } from 'src/app/CoreModule/models/response.models';
import { AppStateInterface } from 'src/app/CoreModule/redux/types/appState.interface';
import * as ItemsActions from './../../../CoreModule/redux/actions/storeReduxAction';
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
})
export class CreateItemComponent implements OnInit {
  public createForm!: FormGroup;

  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppStateInterface>,
  ) {}

  date = new Date();

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.maxLength(25)]],
      img: [
        '',
        [
          Validators.required,
          Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
        ],
      ],
      link: [
        '',
        [
          Validators.required,
          Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'),
        ],
      ],
      date: ['', [Validators.required, this.dateValidator]],
    });
  }

  dateValidator(control: FormControl): { [key: string]: boolean } | null {
    if (control.value.length === 0) return null;

    const todayDate = Date.now();
    const enteredDate = new Date(control.value).getTime();

    if (enteredDate > todayDate) {
      return { futureDate: true };
    }
    return null;
  }

  get formControl() {
    return this.createForm.controls;
  }

  onLogin(): void {
    this.submitted = true;
    if (this.createForm.valid) {
      this.router.navigate(['searchResult']);
    }
  }

  onCreateCardClick() {
    if (this.createForm.status === 'VALID') {
      const obj: IOneItem = {
        kind: 'custom',
        etag: 'none',
        id: Math.floor(Math.random() * 10000).toString(),
        snippet: {
          publishedAt: this.createForm.get('date')?.value,
          channelId: 'none',
          title: this.createForm.get('title')?.value,
          description: this.createForm.get('description')?.value,
          thumbnails: {
            default: {
              url: this.createForm.get('img')?.value,
              width: 0,
              height: 0,
            },
            medium: {
              url: 'none',
              width: 0,
              height: 0,
            },
            high: {
              url: this.createForm.get('img')?.value,
              width: 0,
              height: 0,
            },
            standard: {
              url: 'none',
              width: 0,
              height: 0,
            },
            maxres: {
              url: 'none',
              width: 0,
              height: 0,
            },
          },
          channelTitle: 'none',
          tags: [],
          categoryId: 'none',
          liveBroadcastContent: 'none',
          defaultLanguage: 'none',
          localized: {
            title: 'none',
            description: 'none',
          },
          defaultAudioLanguage: 'none',
        },
        statistics: {
          viewCount: 'none',
          likeCount: 'none',
          dislikeCount: 'none',
          favoriteCount: 'none',
          commentCount: 'none',
        },
      };
      this.store.dispatch(ItemsActions.addOnePost({ oneCard: obj }));
    }
  }
}

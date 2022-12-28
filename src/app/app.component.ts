import { makeBindingParser } from '@angular/compiler';
import { Component, OnInit, VERSION } from '@angular/core';
import { of, from, map, tap } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8)
      .pipe(
        map((item) => item * 2),
        tap((item) => console.log(item))
      )
      .subscribe((item) => {
        console.log(item);
      });

    /* from([10, 20, 40]).subscribe((item) => console.log(item));

    from([100, 200, 300]).subscribe({
      next: (item) => console.log(`resulting item ${item}`),
      error: (error) => console.log(`error ${error}`),
      complete: () => console.log('complete'),
    });*/
  }
}

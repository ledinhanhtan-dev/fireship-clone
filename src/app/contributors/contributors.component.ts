import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contributor } from '@core/models/contributor.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
})
export class ContributorsComponent implements OnInit, OnDestroy {
  private contrSub!: Subscription;
  contributors!: Contributor[];

  constructor(private title: Title, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title.setTitle('Contributors');

    this.contrSub = this.route.data.subscribe(
      data => (this.contributors = data[0]),
    );
  }

  ngOnDestroy(): void {
    if (this.contrSub) this.contrSub.unsubscribe;
  }
}

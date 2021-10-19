import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contributor } from '@core/models/contributor.model';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss'],
})
export class ContributorsComponent implements OnInit, OnDestroy {
  private contrSub!: Subscription;
  contributors!: Contributor[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.contrSub = this.route.data.subscribe(
      data => (this.contributors = data[0]),
    );
  }

  ngOnDestroy(): void {
    if (this.contrSub) this.contrSub.unsubscribe;
  }
}

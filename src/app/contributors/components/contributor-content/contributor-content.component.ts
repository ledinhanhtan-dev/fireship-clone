import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contributor } from '@core/models/contributor.model';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

interface Link {
  [key: string]: string;
}

@Component({
  selector: 'app-contributor-content',
  templateUrl: './contributor-content.component.html',
  styleUrls: ['./contributor-content.component.scss'],
})
export class ContributorContentComponent implements OnInit, OnDestroy {
  private contrSub!: Subscription;
  contributor!: Contributor;

  constructor(private title: Title, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.contrSub = this.route.data.subscribe(data => {
      this.contributor = data[0];
      this.title.setTitle(this.contributor.name);
    });
  }

  ngOnDestroy(): void {
    if (this.contrSub) this.contrSub.unsubscribe;
  }
}

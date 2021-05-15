import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs/operators';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-youtube-data',
  templateUrl: './youtube-data.component.html',
  styleUrls: ['./youtube-data.component.scss']
})
export class YoutubeDataComponent implements OnInit {
  videos: any[];
  unsubscribe$;
  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) { }

  ngOnInit() {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
    }, 3000)
    this.videos = [];
    this.youTubeService
      .getVideosForChanel('UCX1_c64pT0nfPckDVLOHxbw', 15)
      .subscribe(list => {
        console.log(list, 'lista');

        for (let element of list["items"]) {
          this.videos.push(element)
        }
      });
  }

}

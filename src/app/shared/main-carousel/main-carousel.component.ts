import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { ShowAllCarouselBannerApiService } from '../../core/services';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {
  @Input('slides') slides: Array<any> = [];

  public config: SwiperConfigInterface = {};

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  allRequestData: any;

  constructor(
    private showAllCarouselBannerApiService: ShowAllCarouselBannerApiService
  ) { }

  ngOnInit() { 
    this.fetchAllCarouselBanner();
  }


  private fetchAllCarouselBanner(): void {
    this.showAllCarouselBannerApiService.ShowAllCarouselBanner().subscribe((response: any) => {
      if (response.length) {
        this.allRequestData = [];
        response.map((items) => {

          if (items.image) {
            items.image = 'https://elqudes.com/assets/uploads/' + items.image;
            this.allRequestData.push(items)

          }
        })
      }
    })
  }

  ngAfterViewInit() {
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: true,
      navigation: true,
      pagination: this.pagination,
      grabCursor: true,
      loop: false,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: "slide"
    }
  }

}
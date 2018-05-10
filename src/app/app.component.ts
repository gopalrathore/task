import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public date = new Date();

  public appList:any[] = [
    {
      id: 1,
      category: "Lorem ipsum ",
      title: "convallis sed tempor sed",
      footer: "Tap to read more about the award-winning game Inside.",
      imgUrl: "assets/img1.jpg",
      content: [
        "ullamcorper id mi. Vivamus vitae ex eget lacus consectetur interdum non id justo. Etiam sed tincidunt lacus. Sed non magna et risus iaculis malesuada. Donec luctus diam sed tempus imperdiet. Cras rutrum porttitor massa, vel lacinia nisl. Vestibulum bibendum rhoncus elit sit amet dictum. Aliquam ac facilisis risus. Cras semper nunc at quam lacinia posuere. Suspendisse convallis urna nec quam hendrerit, nec dictum erat ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc a velit velit. Vestibulum hendrerit a dui nec auctor.",
        "Sed pulvinar elit vel tellus dapibus, eget rutrum nisl posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vitae felis in dolor vehicula feugiat. Integer vitae euismod nisl, tristique lobortis augue. Nulla in arcu gravida, ultricies metus et, scelerisque dolor. Aenean vitae diam quis velit tincidunt rhoncus id a tellus. Proin imperdiet a quam semper elementum. In sit amet aliquam felis. Duis ullamcorper tellus",
        "ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 "
      ]
    },
    {
      id: 2,
      category: "Lorem ipsum ",
      title: "convallis sed tempor sed",
      footer: "Tap to read more about the award-winning game Inside.",
      imgUrl: "assets/img2.jpg",
      content: [
        "ullamcorper id mi. Vivamus vitae ex eget lacus consectetur interdum non id justo. Etiam sed tincidunt lacus. Sed non magna et risus iaculis malesuada. Donec luctus diam sed tempus imperdiet. Cras rutrum porttitor massa, vel lacinia nisl. Vestibulum bibendum rhoncus elit sit amet dictum. Aliquam ac facilisis risus. Cras semper nunc at quam lacinia posuere. Suspendisse convallis urna nec quam hendrerit, nec dictum erat ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc a velit velit. Vestibulum hendrerit a dui nec auctor.",
        "Sed pulvinar elit vel tellus dapibus, eget rutrum nisl posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vitae felis in dolor vehicula feugiat. Integer vitae euismod nisl, tristique lobortis augue. Nulla in arcu gravida, ultricies metus et, scelerisque dolor. Aenean vitae diam quis velit tincidunt rhoncus id a tellus. Proin imperdiet a quam semper elementum. In sit amet aliquam felis. Duis ullamcorper tellus",
        "ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 "
      ]
    },
    {
      id: 3,
      category: "Lorem ipsum ",
      title: "convallis sed tempor sed",
      footer: "Tap to read more about the award-winning game Inside.",
      imgUrl: "assets/img3.jpg",
      content: [
        "ullamcorper id mi. Vivamus vitae ex eget lacus consectetur interdum non id justo. Etiam sed tincidunt lacus. Sed non magna et risus iaculis malesuada. Donec luctus diam sed tempus imperdiet. Cras rutrum porttitor massa, vel lacinia nisl. Vestibulum bibendum rhoncus elit sit amet dictum. Aliquam ac facilisis risus. Cras semper nunc at quam lacinia posuere. Suspendisse convallis urna nec quam hendrerit, nec dictum erat ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc a velit velit. Vestibulum hendrerit a dui nec auctor.",
        "Sed pulvinar elit vel tellus dapibus, eget rutrum nisl posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vitae felis in dolor vehicula feugiat. Integer vitae euismod nisl, tristique lobortis augue. Nulla in arcu gravida, ultricies metus et, scelerisque dolor. Aenean vitae diam quis velit tincidunt rhoncus id a tellus. Proin imperdiet a quam semper elementum. In sit amet aliquam felis. Duis ullamcorper tellus",
        "ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 "
      ]
    },
    {
      id: 4,
      category: "Lorem ipsum ",
      title: "convallis sed tempor sed",
      footer: "Tap to read more about the award-winning game Inside.",
      imgUrl: "assets/img4.jpg",
      content: [
        "ullamcorper id mi. Vivamus vitae ex eget lacus consectetur interdum non id justo. Etiam sed tincidunt lacus. Sed non magna et risus iaculis malesuada. Donec luctus diam sed tempus imperdiet. Cras rutrum porttitor massa, vel lacinia nisl. Vestibulum bibendum rhoncus elit sit amet dictum. Aliquam ac facilisis risus. Cras semper nunc at quam lacinia posuere. Suspendisse convallis urna nec quam hendrerit, nec dictum erat ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc a velit velit. Vestibulum hendrerit a dui nec auctor.",
        "Sed pulvinar elit vel tellus dapibus, eget rutrum nisl posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vitae felis in dolor vehicula feugiat. Integer vitae euismod nisl, tristique lobortis augue. Nulla in arcu gravida, ultricies metus et, scelerisque dolor. Aenean vitae diam quis velit tincidunt rhoncus id a tellus. Proin imperdiet a quam semper elementum. In sit amet aliquam felis. Duis ullamcorper tellus",
        "ing it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 "
      ]
    }
  ];

  cardOpen(id) {
    let target = document.getElementById(id);
    if (!target.classList.contains('open')) {
      var wrapper = document.querySelector('.wrapper');
      const offsetY = wrapper.scrollTop - target.offsetTop
      const content = target.querySelector('.content')
      const close = target.querySelector('.close')
      target.classList.add('open')
      wrapper.classList.add('lock')
      close['style'].transform = `translateX(4px) translateY(${offsetY}px)`
      content['style'].top = `${offsetY}px`
      content['onscroll'] = e => {
        if (!close.classList.contains('reverse') && content.scrollTop > 386) {
          close.classList.add('reverse')
        } else if (close.classList.contains('reverse') && content.scrollTop <= 386) {
          close.classList.remove('reverse')
        }
      }
    }
  }


  cardClose(event, id) {
    event.stopPropagation();
    let target = document.getElementById(id);
    var wrapper = document.querySelector('.wrapper');
    const content = target.querySelector('.content')
    const close = target.querySelector('.close')
    const cover = content.querySelector('.cover')
    target.classList.remove('open')
    wrapper.classList.remove('lock')
    close['style'].transform = `translateY(0) translateX(0)`
    content['style'].top = 0
    cover['style'].top = `${content.scrollTop}px`
    content['onscroll'] = null
    setTimeout(() => {
      cover['style'].transition = 'none'
      cover['style'].top = '0'
      content.scrollTop = 0
      cover['style'].transition = 'all .4s ease-in-out';
    }, 400)
  }
}

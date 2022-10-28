import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'frontblog';

  Tech_Data = [
    { img: "https://i.ytimg.com/vi/HZ175-0YBs8/maxresdefault.jpg", title: "Barcelona previa chegar às quartas da Champions: veja o prejuízo 1" },
    { img: "https://i.ytimg.com/vi/HZ175-0YBs8/maxresdefault.jpg", title: "Barcelona previa chegar às quartas da Champions: veja o prejuízo 2" },
    { img: "https://i.ytimg.com/vi/HZ175-0YBs8/maxresdefault.jpg", title: "Barcelona previa chegar às quartas da Champions: veja o prejuízo 3" },
    { img: "https://i.ytimg.com/vi/HZ175-0YBs8/maxresdefault.jpg", title: "Barcelona previa chegar às quartas da Champions: veja o prejuízo 4" }
  ];

  Sports_Data = [
    { img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/o_que_e_python_pexels-christina-morillo-3-e1611696760316-700x394.jpg", title: "Python 3.11 é até 60% mais rápido e traz mensagens de erro mais claras" },
    { img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/o_que_e_python_pexels-christina-morillo-3-e1611696760316-700x394.jpg", title: "Python 3.11 é até 60% mais rápido e traz mensagens de erro mais claras" },
    { img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/o_que_e_python_pexels-christina-morillo-3-e1611696760316-700x394.jpg", title: "Python 3.11 é até 60% mais rápido e traz mensagens de erro mais claras" },
    { img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/o_que_e_python_pexels-christina-morillo-3-e1611696760316-700x394.jpg", title: "Python 3.11 é até 60% mais rápido e traz mensagens de erro mais claras" }
  ];

  Movies_Data = [
    { img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/o_que_e_python_pexels-christina-morillo-3-e1611696760316-700x394.jpg", title: "Python 3.11 é até 60% mais rápido e traz mensagens de erro mais claras" },
    { img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/o_que_e_python_pexels-christina-morillo-3-e1611696760316-700x394.jpg", title: "Python 3.11 é até 60% mais rápido e traz mensagens de erro mais claras" },
    { img: "https://i.ytimg.com/vi/HZ175-0YBs8/maxresdefault.jpg", title: "Barcelona previa chegar às quartas da Champions: veja o prejuízo 3" },
    { img: "https://i.ytimg.com/vi/HZ175-0YBs8/maxresdefault.jpg", title: "Barcelona previa chegar às quartas da Champions: veja o prejuízo 4" }
  ];

  Series_Data = [
    { img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/o_que_e_python_pexels-christina-morillo-3-e1611696760316-700x394.jpg", title: "Python 3.11 é até 60% mais rápido e traz mensagens de erro mais claras" },
    { img: "https://i.ytimg.com/vi/HZ175-0YBs8/maxresdefault.jpg", title: "Barcelona previa chegar às quartas da Champions: veja o prejuízo 3" },
    { img: "https://files.tecnoblog.net/wp-content/uploads/2021/01/o_que_e_python_pexels-christina-morillo-3-e1611696760316-700x394.jpg", title: "Python 3.11 é até 60% mais rápido e traz mensagens de erro mais claras" },
    { img: "https://i.ytimg.com/vi/HZ175-0YBs8/maxresdefault.jpg", title: "Barcelona previa chegar às quartas da Champions: veja o prejuízo 4" }
  ];

  MAIN_CATEGORY = this.Tech_Data;

  ChangeCategory(category: string) {
    switch (category) {
      case "tech": {
        this.MAIN_CATEGORY = this.Tech_Data;
        break
      }
      case "sports": {
        this.MAIN_CATEGORY = this.Sports_Data;
        break
      }
      case "movies": {
        this.MAIN_CATEGORY = this.Movies_Data;
        break
      }
      case "series": {
        this.MAIN_CATEGORY = this.Series_Data;
        break
      }
    }
  }
}
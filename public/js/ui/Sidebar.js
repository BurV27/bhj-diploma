class Sidebar {
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  static initToggleButton() {
    const buttonSidebar = document.querySelector(`[data-toggle='push-menu']`);
    const bodyElement = document.getElementsByTagName('body')[0]

    buttonSidebar.addEventListener('click', (e) => {
      e.preventDefault()
      bodyElement.classList.toggle('sidebar-open');
      bodyElement.classList.toggle('sidebar-collapse');
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const buttonLogin = document.getElementsByClassName("menu-item_login")[0];
    const buttonRegister = document.getElementsByClassName('menu-item_register')[0];
    const buttonLogout = document.getElementsByClassName('menu-item_logout')[0];

    const modalLogin = App.getModal("login");
    const modalRegister = App.getModal("register");

    buttonLogin.addEventListener('click', (e) => {
      e.preventDefault();
      modalLogin.open()
      });
    buttonRegister.addEventListener('click', (e) => {
      e.preventDefault();
      modalRegister.open()
    });
    buttonLogout.addEventListener('click', (e) => {
      e.preventDefault();
      User.logout(function(err, response){
        if (response.success){
          App.setState('init');
        }
      })
    })
  }
}


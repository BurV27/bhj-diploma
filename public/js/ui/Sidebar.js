class Sidebar {
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  static initToggleButton() {
    const buttonSidebar = document.querySelector(`[data-toggle='push-menu']`);
    const bodyElement = document.getElementsByTagName('body')[0]

    buttonSidebar.addEventListener('click', () => {
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

  }
}

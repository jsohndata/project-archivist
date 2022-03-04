
  const sidebarButtonCollapse = document.querySelector('#sidebarButtonCollapse');
  const sidebar               = document.querySelector('#sidebar');
  const sidebarClass          = sidebar.classList;

  
  sidebarButtonCollapse.onclick = function() {
    // Open -> Close
    if ( sidebarClass.contains('sidebar-close')) {
      sidebarClass.remove('sidebar-close');
      sidebarClass.toggle('sidebar-open');
      console.log('toggle => open');
    }

    // Close -> Open
    else {
      sidebarClass.toggle('sidebar-close');
      console.log('toggle => close');
    }
  }
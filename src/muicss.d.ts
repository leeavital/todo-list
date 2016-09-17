declare namespace muireact {

  class Appbar {

  }

  class Button {

  }

  class Container {

  }

  class Panel {

  }

  class Input {

  }
}

declare module "muicss/react" {
  export = muireact;
}

declare namespace mui {
  function overlay(offOn: "off" | "on", el?: any): void
}

declare module "muicss" {
  export = mui;
}

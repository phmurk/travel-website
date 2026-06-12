declare module "jquery-ui/ui/widget";
declare module "jquery-ui/ui/widgets/accordion";
declare module "jquery-ui/themes/base/all.css";
declare module "jquery-ui/ui/unique-id";

interface JQuery {
  accordion(options?: any): JQuery;
  accordion(method: string): JQuery;
}

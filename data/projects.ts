export interface ProjectItem {
  name: string;
  desc: string;
  tags?: string[];
  link?: string;
  github?: string;
}

export const projects: ProjectItem[] = [
  {
    name: "Kayibay Wallet",
    desc: "Helped develop kayibay mobile business wallet and POS application built for African SMEs. Enables merchants to accept instant mobile money and card payments, share secure payment links, manage store inventory in real time, and disburse bill and supplier payments from a unified wallet.",
    tags: ["Flutter", "Dart", "Mobile Wallet", "Payments", "POS"],
    link: "https://play.google.com/store/apps/details?id=com.kayibay.kayibaybusiness",
  },
  {
    name: "Havano POS",
    desc: "Mobile Point of Sale and payments application live on Google Play, integrated with enterprise ERP services. Features real-time sales processing, offline transaction queueing, inventory reconciliation, barcode scanning, and hardware receipt printing.",
    tags: ["Flutter", "Dart", "Google Play", "POS", "Payments"],
    link: "https://play.google.com/store/apps/details?id=com.havano.pos.havano_pos&hl=en",
  },
  {
    name: "Tumela Seller",
    desc: "Merchant and seller mobile application live on Google Play for managing commercial stores, multi-channel product catalogs, customer sales orders, real-time inventory tracking, and payment reconciliations.",
    tags: ["Flutter", "Dart", "Google Play", "Merchant", "E-Commerce"],
    link: "https://play.google.com/store/apps/details?id=shop.tumela.seller&hl=en",
  },
  {
    name: "PaGrill",
    desc: "Consumer mobile food ordering and checkout application on Google Play. Features real-time menu browsing, cart checkout, push notifications via Firebase Cloud Messaging, and digital payment gateway integrations.",
    tags: ["Flutter", "Dart", "Google Play", "Payments", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=shop.pagrill.user&hl=en",
  },
  {
    name: "Furrow.Payments",
    desc: "Standalone, production-ready C# / .NET library for integrating Paynow Zimbabwe payment workflows. Features standard Paynow Web Checkout (Visa, MasterCard, ZimSwitch, EcoCash Web), transaction status polling, and automated reconciliations.",
    tags: [".NET", "C#", "Paynow", "Payments", "Open Source"],
    github: "https://github.com/eisax/Furrow.Payments",
    link: "https://github.com/eisax/Furrow.Payments",
  },
  {
    name: "ecocash_dart_sdk",
    desc: "Comprehensive, production-ready Dart SDK for integrating with the EcoCash Open API. Provides enterprise-grade features for processing mobile payments, customer refunds, transaction status polling, circuit breakers, and secure financial logging.",
    tags: ["Dart", "Flutter", "EcoCash", "Payments", "SDK"],
    github: "https://github.com/eisax/ecocash_dart_sdk",
    link: "https://pub.dev/packages/ecocash_dart_sdk",
  },
  {
    name: "pixo_flutter",
    desc: "High-performance Flutter plugin package that wraps the Rust pixo image compression engine via Dart FFI. Delivers fast client-side image compression directly on device to optimize network bandwidth and camera upload performance.",
    tags: ["Flutter", "Rust", "Dart FFI", "Image Processing", "Mobile"],
    github: "https://github.com/eisax/pixo_flutter",
    link: "https://github.com/eisax/pixo_flutter",
  },
  {
    name: "zim_phone_utils_dart",
    desc: "Comprehensive Dart utility library for validating, formatting, and detecting network carriers (Econet, NetOne, Telecel) for Zimbabwean phone numbers across mobile networks. Widely adopted across 250+ integrations for mobile form validation.",
    tags: ["Dart", "Flutter", "Validation", "Mobile", "Open Source"],
    github: "https://github.com/eisax/zim_phone_utils_dart",
    link: "https://pub.dev/packages/zim_phone_utils_dart",
  }
];

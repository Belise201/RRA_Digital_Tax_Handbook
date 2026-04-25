// Kinyarwanda translations — Rwanda Revenue Authority Tax Handbook
// Key vocabulary:
//   Umusoreshwa (sg) / Abasoreshwa (pl) = Taxpayer(s)
//   Umusoro (sg) / Imisoro (pl)          = Tax / Taxes
//   Gasutamo                              = Customs
//   Kwiyandikisha                         = Registration
//   Kwemeza / Gutanga Itangazo            = Declaration
//   Kwishyura                             = Payment
//   Igihano / Ibihano                     = Penalty / Penalties
//   Inyungu                               = Interest
//   Impamyabumenyi                        = Certificate
//   Igenzura                              = Audit
//   Ubujurire                             = Appeal
//   Umusaruro                             = Income / Revenue
//   Agaciro Kongerwa                      = Value Added (TVA/VAT)

export const rw = {
  // Header
  header: {
    searchPlaceholder: "Shakisha amakuru y'imisoro...",
    searchButton: "Shakisha",
    rraWebsite: "Urubuga rwa RRA",
    callCenter: "Hamagara 3004"
  },

  // Top navigation menu categories
  nav: {
    overview: "Incamake",
    registration: "Kwiyandikisha",
    domesticTaxes: "Imisoro yo mu Gihugu & E-Tax",
    decentralised: "Imisoro & Amafaranga — Inzego z'Akarere",
    customs: "Gasutamo",
    payingTaxes: "Kwishyura Imisoro",
    deregistration: "Gukurwa mu Rutonde",
    faqs: "Ibibazo Bikunze Kubazwa",
    menu: "Menyu",
    login: "Injira",
    updates: "Amakuru Mashya",
    markAllRead: "Semura byose nk'byasomwe",
    noUpdates: "Nta makuru mashya ubu",
    viewPage: "Reba Urupapuro",
    wasChanged: "yahindutse"
  },

  // Navigation
  navigation: {
    home: "Ahabanza",
    introduction: "Intangiriro",
    rraInfo: "Ibyerekeye RRA",
    registration: "Kwiyandikisha",
    domesticTaxes: "Imisoro yo mu Gihugu",
    incomeTax: "Umusoro ku Musaruro",
    paye: "PAYE",
    vat: "TVA",
    exciseDuty: "Imisoro ku Bicuruzwa Bihariye",
    withholdingTaxes: "Imisoro Ihagarikwa",
    gamingTaxes: "Umusoro ku Mikino",
    capitalGainsTax: "Umusoro ku Nyungu z'Impano",
    localGovernmentTaxes: "Imisoro za Leta z'Akarere",
    customs: "Gasutamo",
    payingTaxes: "Kwishyura Imisoro",
    deregistration: "Gukurwa mu Rutonde"
  },

  // Home Page
  home: {
    hero: {
      badge: "Igitabo cy'Umusoro cya RRA 2025 — Giteguye",
      title: "Igitabo cy'Umusoro cya RRA",
      subtitle: "Umuyoboro wawe wuzuye w'uburyo bwo kwishyura imisoro mu Rwanda. Shaka ibintu byose ukeneye kumenya ku misoro, kwiyandikisha, gutanga itangazo, no kwishyura mu gice kimwe. Cyavuguruwe n'amategeko mashya y'imisoro n'uburyo bwo gukora bwa 2025.",
      getStarted: "Tangira",
      callCenter: "Hamagara 3004",
      aboutRRA: "Ibyerekeye RRA"
    },
    stats: {
      pages: "Impapuro",
      taxTypes: "Ubwoko bw'Imisoro",
      updated: "Byavuguruwe",
      support: "Ubufasha"
    },
    quickAccess: {
      title: "Injira Vuba",
      subtitle: "Gera vuba ku makuru ukeneye"
    },
    quickLinks: {
      registration: {
        title: "Kwiyandikisha",
        description: "Iyandikishe ubucuruzi bwawe ukabona NIF kuri RDB"
      },
      incomeTax: {
        title: "Umusoro ku Musaruro",
        description: "Umusoro ku Musaruro w'Umuntu bwite na wa Sosiyete hamwe n'uburyo butatu bwo kwishyura"
      },
      vat: {
        title: "TVA",
        description: "Umusoro ku Gaciro Kongerwa kw'ibicuruzwa n'imirimo — 18%"
      },
      paye: {
        title: "PAYE",
        description: "Umusoro wiharirwa ku mishahara y'abakozi"
      },
      customs: {
        title: "Gasutamo",
        description: "Uburyo bwo kuzana no kohereza ibintu n'imisoro ya gasutamo"
      },
      payingTaxes: {
        title: "Kwishyura Imisoro",
        description: "Uburyo butandukanye bwo kwishyura harimo interineti na telefoni ngendanwa"
      }
    },
    taxOverview: {
      title: "Incamake y'Ubwoko bw'Imisoro",
      subtitle: "Incamake yuzuye y'imisoro yose mu Rwanda"
    },
    taxTypes: {
      incomeTax: {
        name: "Umusoro ku Musaruro (PIT & CIT)",
        rate: "0–30%",
        deadline: "31 Werurwe",
        description: "Umusoro ku Musaruro w'Umuntu bwite na wa Sosiyete hamwe n'uburyo bwa Taxe Forfaitaire, Forfait na Régime Réel"
      },
      paye: {
        name: "PAYE",
        rate: "0–30%",
        deadline: "Itariki ya 15 y'ukwezi gutaha",
        description: "Umusoro ku musaruro w'akazi wiharirwa n'abakoresha"
      },
      vat: {
        name: "TVA",
        rate: "18%",
        deadline: "Itariki ya 15 y'ukwezi gutaha",
        description: "Umusoro ku Gaciro Kongerwa ku gucuruza ibicuruzwa n'imirimo"
      },
      exciseDuty: {
        name: "Imisoro ku Bicuruzwa Bihariye",
        rate: "10–160%",
        deadline: "Itariki ya 5 y'ukwezi gutaha",
        description: "Umusoro ku bicuruzwa bihariye nka inzoga, itabi na peteroli"
      },
      withholdingTax: {
        name: "Umusoro Wiharirwa",
        rate: "3–15%",
        deadline: "Itariki ya 15 y'ukwezi gutaha",
        description: "Umusoro wiharirwa mu buryo bwikora ku bikorwa bitandukanye"
      },
      gamingTax: {
        name: "Umusoro ku Mikino",
        rate: "40%",
        deadline: "Itariki ya 15 y'ukwezi gutaha",
        description: "Umusoro ku bikorwa bya mikino n'amahitamo yo gushyuza"
      },
      miningRoyalty: {
        name: "Umusoro w'Ubucukuzi bw'Amabuye",
        rate: "0,5–3%",
        deadline: "Itariki ya 15 y'ukwezi gutaha",
        description: "Umusoro ku gucukura no kugurisha amabuye y'agaciro"
      },
      capitalGains: {
        name: "Umusoro ku Nyungu z'Impano",
        rate: "10%",
        deadline: "Itariki ya 15 y'ukwezi gutaha",
        description: "Umusoro ku nyungu zivuye mu kugurisha ibintu"
      }
    },
    features: {
      title: "Ibiranga Uburyo Bwacu",
      subtitle: "Ibyo bituma uburyo bw'imisoro zacu ari bw'igihe cya none kandi bufite ubwiza"
    },
    keyFeatures: {
      mDeclaration: {
        title: "M-Declaration",
        description: "Tanga itangazo ry'umusoro ukoresheje telefoni ngendanwa. Kanda *800# kugira ngo uwinjire."
      },
      eTax: {
        title: "Sisitemu E-Tax",
        description: "Sisitemu yuzuye yo gutanga itangazo no kwishyura imisoro kuri interineti ku misoro yose yo mu gihugu."
      },
      search: {
        title: "Gushakisha",
        description: "Shaka vuba amakuru ukeneye ukoresheje ubushakashatsi bwacu bwuzuye."
      },
      support: {
        title: "Ubufasha bwa 24/7",
        description: "Bona ubufasha igihe icyo ari cyo cyose ukoresheje ishami rya telefoni (3004) n'ubufasha bwo kuri interineti."
      },
      compliance: {
        title: "Impamyabumenyi y'Ukurikira Amategeko",
        description: "Bona impamyabumenyi ya Quitus Fiscal kugira ngo werekane ukurikira amategeko neza ukabona inyungu z'umusoro."
      },
      updates: {
        title: "Amakuru Mashya mu Gihe",
        description: "Menyera amategeko mashya y'imisoro, amanota n'impinduka z'uburyo bwo gukora."
      }
    },
    digitalServices: {
      title: "Serivisi z'Imisoro za Dijitale",
      subtitle: "Injira kuri serivisi z'imisoro igihe icyo ari cyo cyose, aho uri hose"
    },
    services: {
      eTax: {
        name: "Urubuga E-Tax",
        description: "Tanga itangazo ukishyure imisoro yo mu gihugu kuri interineti",
        access: "Injira kuri Serivisi"
      },
      mDeclaration: {
        name: "M-Declaration",
        description: "Gutanga itangazo ry'umusoro ukoresheje telefoni ngendanwa",
        dial: "Kanda"
      },
      lgt: {
        name: "Sisitemu LGT",
        description: "Gutanga itangazo ry'imisoro n'amafaranga y'ubuyobozi bw'akarere",
        access: "Injira kuri Serivisi"
      },
      reSW: {
        name: "Sisitemu ReSW",
        description: "Urubuga rwa Rwanda rw'Ikibanza Kimwe cya Dijitale kwa Gasutamo",
        access: "Injira kuri Serivisi"
      }
    },
    notice: {
      title: "Itangazo Rikomeye",
      content: "Iyi makuru agenewe gusa gutunga amakuru abagenerwabikorwa bacu kandi irashobora guhinduka igihe amategeko y'imisoro n'amabwiriza agenga imiyoborere y'imisoro bihinduwe. Amakuru muri iki gitabo avuguruwe mu gice kiri kuri interineti, igihe bibaye ngombwa.",
      copyright: "© Ikigo cy'Imisoro cy'u Rwanda 2025",
      published: "Yasohowe bwa mbere 2018. Yasohowe bwa kabiri 2025."
    },
    contact: {
      title: "Amakuru yo Gutumanahana",
      subtitle: "Tumanahana na RRA kugira ngo ubone ubufasha n'inkunga",
      callCenter: {
        title: "Ishami rya Telefoni",
        tollFree: "Nta giciro: 3004",
        available: "Bihagaze 24/7"
      },
      website: {
        title: "Urubuga"
      },
      officeHours: {
        title: "Amasaha y'Akazi",
        days: "Kuwa Mbere – Kuwa Gatanu",
        time: "7:30 – 17:00"
      }
    }
  },

  // Common
  common: {
    rate: "Igipimo",
    deadline: "Itariki y'Imperuka",
    loading: "Birakora...",
    error: "Habaye ikibazo",
    notFound: "Urupapuro rutabonetse",
    backToHome: "Subira ku Itangiriro",
    language: "Ururimi",
    selectLanguage: "Hitamo Ururimi"
  },

  // Sidebar Navigation
  sidebar: {
    title: "Igitabo cy'Umusoro",
    sections: {
      overview: "Incamake n'Intangiriro",
      taxTypes: "Ubwoko bw'Imisoro n'Uburyo",
      procedures: "Uburyo n'Ukurikira Amategeko",
      systems: "Sisitemu za Dijitale n'Ibikoresho",
      resources: "Ibikoresho n'Inyandiko"
    },
    items: {
      home: "Ahabanza",
      introduction: "Intangiriro",
      rraInfo: "Amakuru ya RRA",
      definitions: "Ibisobanuro by'Amagambo",
      acronyms: "Imibare y'Amagambo Ngufi",
      lawsRulings: "Amategeko n'Ibyemezo",
      registration: "Kwiyandikisha",
      domesticTaxes: "Imisoro yo mu Gihugu na E-Tax",
      incomeTax: "Umusoro ku Musaruro (PIT & CIT)",
      paye: "PAYE",
      vat: "Umusoro ku Gaciro Kongerwa (TVA)",
      exciseDuty: "Imisoro ku Bicuruzwa Bihariye",
      withholdingTaxes: "Imisoro Ihagarikwa",
      gamingTaxes: "Umusoro ku Mikino",
      miningRoyalty: "Umusoro w'Ubucukuzi bw'Amabuye",
      capitalGainsTax: "Umusoro ku Nyungu z'Impano",
      roadMaintenance: "Umusoro wo Gusana Inzira",
      tourismTax: "Umusoro w'Ubukerarugendo",
      localGovernmentTaxes: "Imisoro za Leta z'Akarere",
      customs: "Gasutamo",
      obligations: "Inshingano n'Ububiko bw'Ibaruwa",
      audits: "Igenzura",
      refunds: "Gusubizwa Amafaranga n'Inguzanyo z'Umusoro",
      appeals: "Ubujurire",
      debtManagement: "Gucunga Inyinguzanyo",
      certificates: "Impamyabumenyi (TVA, TCC, n'izindi)",
      voluntaryDisclosure: "Gahunda yo Kwiyerekana ku Bushake",
      vatReward: "Igihembo cya TVA",
      payingTaxes: "Kwishyura Imisoro",
      deregistration: "Gukurwa mu Rutonde",
      myrra: "MyRRA",
      eTax: "Sisitemu E-Tax",
      electronicInvoicing: "Inyemezabuguzi za Dijitale (EIS)",
      motorVehicle: "Sisitemu y'Imodoka",
      onlineRequests: "Gusaba kuri Interineti",
      exchangeInfo: "Gutumanahana Amakuru",
      searchHandbook: "Shakisha mu Gitabo",
      penaltiesFines: "Ibihano n'Amande",
      taxCentres: "Ibiro by'Imisoro",
      quickReference: "Amakuru Ngufi",
      rraWebsite: "Urubuga rwa RRA",
      eTaxPortal: "Urubuga E-Tax",
      lgtSystem: "Sisitemu LGT"
    },
    footer: {
      aboutUs: "Ibyacu",
      organizationStructure: "Imiterere y'Ikigo",
      information: "Amakuru",
      jobAnnouncements: "Amatangazo y'Akazi",
      announcements: "Amatangazo",
      staffLogin: "Kwinjira kw'Abakozi",
      socialMedia: "Imbuga Nkoranyambaga Zacu",
      importantLinks: "Inyungu z'Ingenzi",
      tinSearch: "Shakisha NIF ukoresheje indangamuntu",
      taxCalculation: "Uko Umusoro Ubarwa",
      shortDocuments: "Inyandiko Ngufi",
      tollFree: "Nimero Itarishyurwa (mu Rwanda)",
      international: "Mu Mahanga",
      copyright: "© Ikigo cy'Imisoro cy'u Rwanda 2025\nCyasohowe bwa mbere 2018. Uburenganzira bwose burabitswe.\nCyasohowe bwa kabiri 2025. Uburenganzira bwose burabitswe."
    }
  },

  // Footer
  footer: {
    socialMedia: "Imbuga Nkoranyambaga Zacu",
    helpContacts: "Ubufasha & Itumanahane",
    localCalls: "Hamagara mu Rwanda",
    internationalCalls: "Hamagara mu Mahanga",
    sendLetter: "Tuture Ibaruwa",
    copyright: "© Ikigo cy'Imisoro cy'u Rwanda 2025"
  },

  // Auth modals
  auth: {
    login: {
      title: "Injira",
      subtitle: "Injira mu konti yawe ya Ikigo cy'Imisoro cy'u Rwanda",
      role: "Injira nka",
      taxpayer: "Umusoreshwa",
      admin: "Umuyobozi",
      email: "Aderesi Imeyili",
      password: "Ijambo Banga",
      emailPlaceholder: "Andika imeyili yawe",
      passwordPlaceholder: "Andika ijambo banga ryawe",
      submit: "Injira",
      submitting: "Birakora...",
      noAccount: "Nta konti ufite?",
      signUp: "Iyandikishe"
    },
    signup: {
      title: "Fungura Konti",
      subtitle: "Injira mu rubuga rwa Ikigo cy'Imisoro cy'u Rwanda",
      firstName: "Izina ry'Ibanze",
      lastName: "Irindi Zina",
      email: "Aderesi Imeyili",
      password: "Ijambo Banga",
      confirmPassword: "Emeza Ijambo Banga",
      firstNamePlaceholder: "Andika izina ryawe ry'ibanze",
      lastNamePlaceholder: "Andika irindi zina ryawe",
      emailPlaceholder: "Andika imeyili yawe",
      passwordPlaceholder: "Fungura ijambo banga",
      confirmPasswordPlaceholder: "Emeza ijambo banga ryawe",
      submit: "Fungura Konti",
      submitting: "Birakora...",
      hasAccount: "Usanzwe ufite konti?",
      signIn: "Injira",
      passwordMismatch: "Amagambo banga ntahura",
      success: "Konti yafunguwe neza!"
    },
    userMenu: {
      currentlyIn: "Uri muri",
      logout: "Sohoka"
    }
  },

  // Foreword
  foreword: {
    title: "Ijambo ry'Intangiriro rya Komisiyo Nkuru",
    commissionerGeneral: "Komisiyo Nkuru",
    commissionerName: "NIWENSHUTI Ronald",
    commissionerTitle: "Komisiyo Nkuru",
    paragraph1: "Nishimye cyane gushyikiriza iki gitabo cya kabiri cyatanzwe mu nyandiko cya Igitabo cy'Umusoro cy'Ikigo cy'Imisoro cy'u Rwanda (RRA). Iki gitabo cy'umusoro ni ikimenyetso cy'ingenzi cy'uko RRA ifite ubushake bukomeza bwo kuba 'Hano Kuri Mwe, Kugusembura'. Ibi bivuze ko muri RRA dushishikariye gutanga serivisi nziza cy'uko bishoboka kuri mwe, abasoreshwa bacu.",
    paragraph2: "Iki gitabo cy'umusoro kigerageza gusubiza ibibazo byose abasoreshwa bashobora kugira ku buryo, igihe, aho, imisoro ihe, umubare ki na n'impamvu zose z'uko bishyura imisoro. Muri iki gice cyanditswe, twongeramo amakuru ku mategeko mashya y'imisoro arebana n'Umusoro ku Musaruro, Umusoro ku Gaciro Kongerwa, imiterere y'ingengo n'ubutunzi bw'imiryango y'ubuyobozi bw'akarere, imisoro ku bicuruzwa bihariye, gutumanahana amakuru mu buryo bwikora ku musoro, n'uburyo bwo kora.",
    paragraph3: "Ibi bikubiyemo ibice byose by'imisoro yo mu gihugu, imisoro y'ubuyobozi bw'akarere n'amafaranga, n'imisoro ya gasutamo. Ibi bivuze ko amategeko yose y'imisoro y'u Rwanda, imikorere n'uburyo bwo kora byegeranijwe mu gice kimwe kugira ngo byungure akamaro abasoreshwa bose.",
    paragraph4: "Intego y'ingenzi y'iki gitabo ni ukwerekana abasoreshwa uburyo bworoshye bwo gutanga itangazo no kwishyura imisoro kuri interineti cyangwa kuri telefoni zabo ngendanwa. Amabwiriza yoroshye y'intambwe ku ntambwe yerekana uburyo bwo gutanga itangazo ry'umusoro ukoresheje E-Tax, M-Declaration na sisitemu y'Imisoro y'Ubuyobozi bw'Akarere (LGT). Nyuma yo gutanga itangazo, imisoro irashobora kwishyurwa vuba ukoresheje sisitemu nka E-Payment, Kwishyura kuri Interineti, MTN Mobile Money na Mobicash. Izi sisitemu zose zivuze ko ntibyigeze byoroshya cyane, kandi ntibyigeze bygira igihe gito, gukurikira inshingano zawe z'imisoro.",
    paragraph5: "Byongeye kandi, ibice byerekeye amakuru rusange ya RRA ni by'ingenzi cyane kwerekana abasoreshwa uburyo RRA ikurikirana ukurikira amategeko y'imisoro, ikavugana ku kwishyura imisoro itarishyuriwe, ikemererwa kumvikana neza kandi ikagira ibihano ku batakurikiye. Mu iherezo, intego y'ingenzi y'iki gitabo cy'umusoro ni ugufasha abasoreshwa. Dushaka ko abasoreshwa basobanukirwa neza inshingano zabo z'imisoro. Dushaka ko abasoreshwa bamenya ko RRA ibakorera. Dushaka ko abasoreshwa babwire inshuti zabo, abatanga ibintu, abakiriya n'abasimbuzi babo ko kwishyura imisoro yabo ntibyigeze byanoroshya kandi ntibyigeze byari by'ingenzi cyane mu gutera inkunga iterambere ry'igihugu cyacu."
  },

  // Laws and Rulings
  lawsRulings: {
    title: "Amategeko, Amabwiriza ya Minisitiri n'Ibyemezo",
    subtitle: "Amakuru ku mategeko y'imisoro, amabwiriza, n'uburyo bwo gusaba ibyemezo by'ubuyobozi",
    wherePublished: {
      title: "Ni hehe amategeko, amabwiriza ya Minisitiri n'ibyemezo by'ubuyobozi bw'imisoro bishyirwaho?",
      description: "Amategeko yose, amabwiriza ya Minisitiri, ibyemezo bya Komisiyo Nkuru (CG), ibyemezo by'umuryango n'ibyemezo by'ubuyobozi bw'imisoro birasanganyirizwa kuri urubuga rwa RRA ku:"
    },
    howToRequest: {
      title: "Abasoreshwa bashobora gusaba ibyemezo niba hari ikintu kidasobanutse?",
      description: "Niba hari ibice bidasobanutse, cyangwa bitarimo, mu mategeko yariho, amabwiriza ya Minisitiri cyangwa ibyemezo byabanje, abasoreshwa bashobora gusaba gusobanurwa cyangwa icyemezo cy'ubuyobozi gikozwe na RRA."
    },
    process: {
      title: "Uburyo bwo Gusaba Icyemezo",
      description: "Kugira ngo basabe icyemezo, abasoreshwa bagomba kwandika ibaruwa yoherejwe Komisiyo Nkuru wa RRA. Iyo baruwa igomba:",
      requirement1: "Kwerekana amazina y'umusoreshwa na NIF ye.",
      requirement2: "Kwerekana ibice by'ingenzi by'amategeko, amabwiriza ya Minisitiri cyangwa ibyemezo byabanje.",
      requirement3: "Kuvuga impamvu zose z'uko icyemezo cyakenewe.",
      note: "Icyitonderwa:",
      noteText: "RRA izasuzuma icyifuzo kandi izamenyesha umusoreshwa icyemezo cy'ubuyobozi mu buryo bwo kugera. Mu gihe icyemezo kiba gitewe ngo kingire akamaro abasoreshwa muri rusange, kizandikwa nk'icyemezo cy'ubuyobozi kuri urubuga rwa RRA ku rukurikirane ruvugwa hejuru."
    },
    stayUpdated: {
      title: "Komeza Umenye",
      description: "Amategeko n'amabwiriza y'imisoro irashobora guvuguruwa buri gihe. Ni ngombwa gusuzuma buri gihe urubuga rwa RRA kugira ngo ubone amashyiraho y'amategeko, amabwiriza ya Minisitiri n'ibyemezo kugira ngo ukurikire ibisabwa by'ubu."
    }
  },

  // VDS Page
  vds: {
    title: "Gahunda yo Kwiyerekana ku Bushake (VDS)",
    subtitle: "Amahirwe yatanzwe n'amategeko abantu batakurikiye amategeko yo gutanga itangazo no kwishyura umusoro wabo n'ibihano bike",
    whatIsVDS: {
      title: "VDS ni iki?",
      description: "VDS ni amahirwe yatanzwe n'amategeko abantu batakurikiye amategeko yo gutanga itangazo no kwishyura umusoro wabo n'ibihano bike. VDS irashobora gufasha ibi bikurikira:",
      benefits: [
        "Guhagarikwa mu buryo bwikora kw'ibihano n'inyungu z'ishyura ryakozwe nyuma y'igihe",
        "Kwishyura mu minsi 30",
        "Impamyabumenyi yo Kwiyerekana ku Bushake"
      ]
    },
    basis: {
      title: "VDS ishingiye ku ki?",
      article94: {
        title: "Ingingo ya 94 y'Itegeko No. 020/2023",
        description: "Ingingo ya 94 y'Itegeko No. 020/2023 ryo ku wa 31/03/2023 ku nzego z'imisoro rigira ko inyungu n'ibihano ntibikoreshwa ku basoreshwa biyerekana ku bushake."
      },
      ministerialOrder: {
        title: "Iteka rya Minisitiri No. 001/24/03/TC",
        description: "Kugira ngo ingingo ya 94 ikorwe, Iteka rya Minisitiri No. 001/24/03/TC ryo ku wa 08/03/2024 ryashyizeho inzira n'ibisabwa byo kugera ku biremeza byo kwiyerekana ku bushake."
      }
    },
    eligibility: {
      title: "Ni nde wemerewe VDS?",
      criteria: [
        "Umusoreshwa wiyandikishije mbere yuko amenyeshwa ko azagenzurwa",
        "Umusoreshwa utiyandikishije",
        "Umusoreshwa ufite igihe cy'umusoro kirenze imyaka itanu yo kugenzurwa",
        "Undi muntu wese nk'uko Minisitiri azabimenyesha"
      ]
    },
    application: {
      title: "Ni hehe bisabira VDS?",
      onlineTitle: "Gusaba kuri Interineti",
      description: "Mu gihe cya VDS, amasaba atangwa kuri interineti kuri urubuga rwa RRA",
      website: "www.rra.gov.rw"
    },
    notices: {
      important: {
        title: "Itangazo Rikomeye",
        description: "Amasaba ya VDS yemerewe gusa mu bihe bya VDS byashyizweho. Reba urubuga rwa RRA kugira ngo ubone ibihe bya VDS by'ubu n'ibitariki by'imperuka."
      },
      payment: {
        title: "Igihe Cyashyizweho cyo Kwishyura",
        description: "Amaze kwemezwa gasaba rya VDS ryawe, ishyura rigomba gukorwa mu minsi 30 kugira ngo ubone guhagarikwa kw'ibihano n'inyungu."
      }
    }
  }
};

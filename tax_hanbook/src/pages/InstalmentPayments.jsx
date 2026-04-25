import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const InstalmentPayments = () => {
  const { currentLanguage } = useLanguage();

  const content = {
    en: {
      title: "Declaring Instalment Quarterly Prepayment (IQP) Income Tax",
      content: [
        {
          type: "paragraph",
          text: "IQP Income Tax can be declared using M-Declaration or using E-Tax. An important consideration is that any withholding tax that has been withheld and paid on behalf of the taxpayer during the tax period can only be claimed back when using E-Tax."
        },
        {
          type: "heading",
          text: "Declaring IQP using M-Declaration"
        },
        {
          type: "paragraph",
          text: "The process for declaring IQP using M-Declaration is explained <Link to=\"/m-declaration-flat-lump-iqp\" className=\"content-link\">(check on M-Declaration for Flat Tax, Lump Sum and IQP)</Link> for more details. In addition, the process of declaring Motor Vehicle IQP using M-Declaration is explained <Link to=\"/m-declaration-motor-vehicle\" className=\"content-link\">(check on M-Declaration for Motor Vehicle)</Link> for more details."
        },
        {
          type: "heading",
          text: "Declaring IQP using E-Tax"
        },
        {
          type: "paragraph",
          text: "The declaration process for IQP using E-Tax is similar to other domestic taxes, <Link to=\"/domestic-taxes\" className=\"content-link\">(check on Explanation of Domestic Taxes and E-Tax)</Link> for more details. The process is the same whether declaring the tax type is PIT or CIT and for each of the regimes."
        },
        {
          type: "paragraph",
          text: "Firstly, if the taxpayer has had any tax withheld and paid on their behalf during the tax period, they must download the IQP Annexures from the E-Tax website, (check on Explanation of Domestic Taxes and E-Tax) for more detail on downloading annexures. The taxpayer must choose the relevant PIT or CIT annexure, but the details required are the same."
        },
        {
          type: "paragraph",
          text: "If the taxpayer has not had any tax withheld and paid on their behalf during the tax period, they can continue straight to the IQP declaration form below."
        },
        {
          type: "heading",
          text: "Annexures"
        },
        {
          type: "paragraph",
          text: "The IQP annexure has two tabs. Only the tabs that are applicable in that tax period need to be completed, validated and saved. (check on Explanation of Domestic Taxes and E-Tax) if the taxpayer has any problems when validating annexures."
        },
        {
          type: "heading",
          text: "5% Withholding Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable to any taxpayer who has paid withholding tax on imports of 5% (WHT 5%) during the tax period. This does not include any other types of withholding tax, which must be declared in the 'Withholding' tab."
        },
        {
          type: "paragraph",
          text: "The details required to enter the withholding tab are the same as described <Link to=\"/withholding-taxes-explanation\" className=\"content-link\">(check on Explanation of Withholding Taxes)</Link> for more details."
        },
        {
          type: "heading",
          text: "Withholding Tab"
        },
        {
          type: "paragraph",
          text: "This tab is applicable to any taxpayers who have had tax withheld and paid on their behalf during the tax period. This includes WHT 15%, WHT 3%, Gaming Tax and Mining Royalty Tax. This does not include WHT 5% on imports which is included in the 'Withholding 5%' tab."
        },
        {
          type: "paragraph",
          text: "The details required to enter the withholding tab are the same as described <Link to=\"/withholding-taxes-explanation\" className=\"content-link\">(check on Explanation of Withholding Taxes)</Link> for more details."
        },
        {
          type: "heading",
          text: "IQP Declaration Form"
        },
        {
          type: "paragraph",
          text: "After all applicable IQP annexures (if any) have been completed, validated and saved in the folder C:/RRA in the user's local machine, the taxpayer can return to E-Tax to complete the IQP declaration, (check on Explanation of Domestic Taxes and E-Tax) for more detail on selecting the relevant declaration. The taxpayer must choose the relevant PIT or CIT declaration, but the details required are the same."
        },
        {
          type: "paragraph",
          text: "The IQP declaration form requires data on:"
        },
        {
          type: "list",
          items: [
            "Income Tax Payable – Enter the 'Income Tax Payable' declared in the previous annual Income Tax declaration.",
            "Total Withholding on Payments (3%) – Enter the amount of WHT 3% that has been withheld on behalf of the taxpayer.",
            "Total Withholding on Imports (5%) – Enter the amount of WHT 5% that has been withheld on behalf of the taxpayer. This should equal the total combined values in the 'Withholding 5%' annexure.",
            "Total Withholding on other Payments (15% and/or 10%) – Enter the amount of all other withholdings that have been withheld on behalf of the taxpayer. This includes WHT 15%, Gaming Tax and Mining Royalty Tax. This does not include WHT 5% or WHT 3%."
          ]
        },
        {
          type: "paragraph",
          text: "Once all relevant white boxes have been entered, click 'save' to calculate the grey boxes automatically."
        },
        {
          type: "heading",
          text: "Example 25"
        },
        {
          type: "paragraph",
          text: "An example IQP declaration is entered below. The IQP due for this taxpayer in this tax period is FRW 26,550."
        },
        {
          type: "paragraph",
          text: "After saving the IQP regime declaration form, if the taxpayer has not had any tax withheld and paid on their behalf during the tax period, click 'Submit without Annexures' to submit the declaration."
        },
        {
          type: "paragraph",
          text: "If the taxpayer has had any tax withheld and paid on their behalf during the tax period, upload the IQP annexures and then compare with the declaration form, (check on Explanation of Domestic Taxes and E-Tax) for more detail on uploading annexures and comparing with declaration forms."
        },
        {
          type: "heading",
          text: "Example 26"
        },
        {
          type: "paragraph",
          text: "Continuing the example of the IQP declaration above, the taxpayer has had tax withheld and paid on their behalf during the tax period, and the comparison between this IQP declaration and the uploaded annexures is shown below. As all the comparison values are equal, the declaration can be certified and submitted."
        },
        {
          type: "paragraph",
          text: "Once all the annexures and declaration values are equal, correct and certified, click to 'Submit' the declaration. After successfully submitting, this screen will load."
        },
        {
          type: "paragraph",
          text: "Click to 'View Acknowledgement Receipt' to view the RRA reference number and the total tax due that are required for payment. (check on Methods of Paying Taxes) for more details on paying taxes. Remember that payment must also be made before the deadline to avoid penalties and fines."
        }
      ]
    },
    fr: {
      title: "Déclaration de l'Impôt sur le Revenu de Paiement Anticipé Trimestriel (IQP)",
      content: [
        {
          type: "paragraph",
          text: "L'Impôt sur le Revenu IQP peut être déclaré en utilisant M-Declaration ou E-Tax. Une considération importante est que toute retenue d'impôt qui a été retenue et payée au nom du contribuable pendant la période fiscale ne peut être réclamée que lors de l'utilisation d'E-Tax."
        },
        {
          type: "heading",
          text: "Déclaration IQP en utilisant M-Declaration"
        },
        {
          type: "paragraph",
          text: "Le processus de déclaration IQP en utilisant M-Declaration est expliqué à la page 144. De plus, le processus de déclaration IQP de Véhicule Motorisé en utilisant M-Declaration est expliqué à la page 147."
        },
        {
          type: "heading",
          text: "Déclaration IQP en utilisant E-Tax"
        },
        {
          type: "paragraph",
          text: "Le processus de déclaration pour IQP en utilisant E-Tax est similaire aux autres impôts nationaux, comme expliqué à la page 97. Le processus est le même que ce soit pour déclarer le type d'impôt PIT ou CIT et pour chacun des régimes."
        },
        {
          type: "paragraph",
          text: "Premièrement, si le contribuable a eu des impôts retenus et payés en son nom pendant la période fiscale, il doit télécharger les Annexes IQP du site web E-Tax, voir page 97 pour plus de détails sur le téléchargement des annexes. Le contribuable doit choisir l'annexe PIT ou CIT pertinente, mais les détails requis sont les mêmes."
        },
        {
          type: "paragraph",
          text: "Si le contribuable n'a pas eu d'impôts retenus et payés en son nom pendant la période fiscale, il peut continuer directement au formulaire de déclaration IQP ci-dessous."
        },
        {
          type: "heading",
          text: "Annexes"
        },
        {
          type: "paragraph",
          text: "L'annexe IQP a deux onglets. Seuls les onglets applicables dans cette période fiscale doivent être complétés, validés et sauvegardés. Voir page 99 si le contribuable a des problèmes lors de la validation des annexes."
        },
        {
          type: "heading",
          text: "Onglet Retenue 5%"
        },
        {
          type: "paragraph",
          text: "Cet onglet s'applique à tout contribuable qui a payé la retenue d'impôt sur les importations de 5% (WHT 5%) pendant la période fiscale. Cela n'inclut pas d'autres types de retenue d'impôt, qui doivent être déclarés dans l'onglet 'Retenue'."
        },
        {
          type: "paragraph",
          text: "Les détails requis pour entrer dans l'onglet de retenue sont les mêmes que décrits à la page 152."
        },
        {
          type: "heading",
          text: "Onglet Retenue"
        },
        {
          type: "paragraph",
          text: "Cet onglet s'applique à tout contribuable qui a eu des impôts retenus et payés en son nom pendant la période fiscale. Cela inclut WHT 15%, WHT 3%, Taxe de Jeu et Taxe de Redevance Minière. Cela n'inclut pas WHT 5% sur les importations qui est inclus dans l'onglet 'Retenue 5%'."
        },
        {
          type: "paragraph",
          text: "Les détails requis pour entrer dans l'onglet de retenue sont les mêmes que décrits à la page 153."
        },
        {
          type: "heading",
          text: "Formulaire de Déclaration IQP"
        },
        {
          type: "paragraph",
          text: "Après que toutes les annexes IQP applicables (si il y en a) ont été complétées, validées et sauvegardées dans le dossier C:/RRA sur la machine locale de l'utilisateur, le contribuable peut retourner à E-Tax pour compléter la déclaration IQP, voir page 103 pour plus de détails sur la sélection de la déclaration pertinente. Le contribuable doit choisir la déclaration PIT ou CIT pertinente, mais les détails requis sont les mêmes."
        },
        {
          type: "paragraph",
          text: "Le formulaire de déclaration IQP nécessite des données sur :"
        },
        {
          type: "list",
          items: [
            "Impôt sur le Revenu à Payer – Entrez l' 'Impôt sur le Revenu à Payer' déclaré dans la déclaration annuelle d'Impôt sur le Revenu précédente.",
            "Total Retenue sur Paiements (3%) – Entrez le montant de WHT 3% qui a été retenu au nom du contribuable.",
            "Total Retenue sur Importations (5%) – Entrez le montant de WHT 5% qui a été retenu au nom du contribuable. Ceci devrait égaler les valeurs totales combinées dans l'annexe 'Retenue 5%'.",
            "Total Retenue sur autres Paiements (15% et/ou 10%) – Entrez le montant de toutes les autres retenues qui ont été retenues au nom du contribuable. Cela inclut WHT 15%, Taxe de Jeu et Taxe de Redevance Minière. Cela n'inclut pas WHT 5% ou WHT 3%."
          ]
        },
        {
          type: "paragraph",
          text: "Une fois que toutes les cases blanches pertinentes ont été entrées, cliquez sur 'sauvegarder' pour calculer automatiquement les cases grises."
        },
        {
          type: "heading",
          text: "Exemple 25"
        },
        {
          type: "paragraph",
          text: "Un exemple de déclaration IQP est entré ci-dessous. L'IQP dû pour ce contribuable dans cette période fiscale est de 26,550 FRW."
        },
        {
          type: "paragraph",
          text: "Après avoir sauvegardé le formulaire de déclaration du régime IQP, si le contribuable n'a pas eu d'impôts retenus et payés en son nom pendant la période fiscale, cliquez sur 'Soumettre sans Annexes' pour soumettre la déclaration."
        },
        {
          type: "paragraph",
          text: "Si le contribuable a eu des impôts retenus et payés en son nom pendant la période fiscale, téléchargez les annexes IQP puis comparez avec le formulaire de déclaration, voir page 107 pour plus de détails sur le téléchargement des annexes et la comparaison avec les formulaires de déclaration."
        },
        {
          type: "heading",
          text: "Exemple 26"
        },
        {
          type: "paragraph",
          text: "Continuant l'exemple de la déclaration IQP ci-dessus, le contribuable a eu des impôts retenus et payés en son nom pendant la période fiscale, et la comparaison entre cette déclaration IQP et les annexes téléchargées est montrée ci-dessous. Comme toutes les valeurs de comparaison sont égales, la déclaration peut être certifiée et soumise."
        },
        {
          type: "paragraph",
          text: "Une fois que toutes les annexes et valeurs de déclaration sont égales, correctes et certifiées, cliquez pour 'Soumettre' la déclaration. Après soumission réussie, cet écran se chargera."
        },
        {
          type: "paragraph",
          text: "Cliquez sur 'Voir le Reçu d'Accusé de Réception' pour voir le numéro de référence RRA et le total d'impôt dû qui sont requis pour le paiement. Voir page 438 pour plus de détails sur le paiement des impôts. N'oubliez pas que le paiement doit également être effectué avant la date limite pour éviter les pénalités et les amendes."
        }
      ]
    },
    rw: {
      title: "Gutanga Amakuru y'Umusoro w'Inguzanyo w'Kwishyura mbere kw'amezi atatu (IQP)",
      content: [
        {
          type: "paragraph",
          text: "Umusoro w'Inguzanyo wa IQP wakoresheje M-Declaration cyangwa ukoresheje E-Tax. Icyo cyibanze ni ko umusoro wakururwa wose wakururwa kandi wakishyurwa ku bubasha bwa musanzu mu gihe cy'umusoro wakoresheje E-Tax gusa."
        },
        {
          type: "heading",
          text: "Gutanga amakuru IQP ukoresheje M-Declaration"
        },
        {
          type: "paragraph",
          text: "Uburyo bwo gutanga amakuru IQP ukoresheje M-Declaration busobanurwa ku ipaji ya 144. Hamwe na byo, uburyo bwo gutanga amakuru IQP y'Imodoka ukoresheje M-Declaration busobanurwa ku ipaji ya 147."
        },
        {
          type: "heading",
          text: "Gutanga amakuru IQP ukoresheje E-Tax"
        },
        {
          type: "paragraph",
          text: "Uburyo bwo gutanga amakuru IQP ukoresheje E-Tax ni bwo bwo nk'ibindi bisoro byo mu gihugu, nk'uko busobanurwa ku ipaji ya 97. Uburyo ni bwo bwo niba gutanga amakuru y'umusoro ni PIT cyangwa CIT kandi ku miterere yose."
        },
        {
          type: "paragraph",
          text: "Mbere, niba umusanzu yafite umusoro wakururwa kandi wakishyurwa ku bubasha bwe mu gihe cy'umusoro, agomba gukurura ibindi bikurikira bya IQP kuva ku rubuga rwa E-Tax, reba ipaji ya 97 ubwinshi ku gukurura ibindi bikurikira. Umusanzu agomba guhitamo ikindi bikurikira cya PIT cyangwa CIT cyakwiye, ariko amakuru akenera ni amwe."
        },
        {
          type: "paragraph",
          text: "Niba umusanzu atafite umusoro wakururwa kandi wakishyurwa ku bubasha bwe mu gihe cy'umusoro, ashobora gukomeza gusa ku ifishi ry'uko gutanga amakuru ya IQP hepfo."
        },
        {
          type: "heading",
          text: "Ibindi Bikurikira"
        },
        {
          type: "paragraph",
          text: "Ikindi bikurikira cya IQP gifite ibice bibiri. Ibice gusa bikwiye mu gihe cy'umusoro cyo ni byo bikenera gukuzuza, gushimangira no kubika. Reba ipaji ya 99 niba umusanzu afite ibibazo mugihe cyo gushimangira ibindi bikurikira."
        },
        {
          type: "heading",
          text: "Icyiciro cya 5% cy'Umusoro wakururwa"
        },
        {
          type: "paragraph",
          text: "Iki cyiciro gikwiye ku musanzu wese wakishyuye umusoro wakururwa ku bintu binjizwa bya 5% (WHT 5%) mu gihe cy'umusoro. Ibi ntibibamo ibindi bice by'umusoro wakururwa, bikenera gutangwa mu cyiciro cya 'Umusoro wakururwa'."
        },
        {
          type: "paragraph",
          text: "Amakuru akenera kwinjira mu cyiciro cy'umusoro wakururwa ni amwe n'ayanditswe ku ipaji ya 152."
        },
        {
          type: "heading",
          text: "Icyiciro cy'Umusoro wakururwa"
        },
        {
          type: "paragraph",
          text: "Iki cyiciro gikwiye ku musanzu wese wafite umusoro wakururwa kandi wakishyurwa ku bubasha bwe mu gihe cy'umusoro. Ibi birimo WHT 15%, WHT 3%, Umusoro w'Umukino na Umusoro w'Ubwishyu bw'Ubwoba. Ibi ntibibamo WHT 5% ku bintu binjizwa bishyirwa mu cyiciro cya 'Umusoro wakururwa 5%'."
        },
        {
          type: "paragraph",
          text: "Amakuru akenera kwinjira mu cyiciro cy'umusoro wakururwa ni amwe n'ayanditswe ku ipaji ya 153."
        },
        {
          type: "heading",
          text: "Ifishi ry'Uko Gutanga Amakuru ya IQP"
        },
        {
          type: "paragraph",
          text: "Nyuma y'uko ibindi bikurikira byose bya IQP bikwiye (niba hari) byakuzuzwe, byashimangiwe kandi byabikijwe mu gushushanya C:/RRA mu mashini y'umukoresha, umusanzu ashobora kugaruka ku E-Tax kugira ngo akuzuze gutanga amakuru ya IQP, reba ipaji ya 103 ubwinshi ku guhitamo amakuru y'uko gutanga akwiye. Umusanzu agomba guhitamo amakuru y'uko gutanga ya PIT cyangwa CIT akwiye, ariko amakuru akenera ni amwe."
        },
        {
          type: "paragraph",
          text: "Ifishi ry'uko gutanga amakuru ya IQP rikenera amakuru ku:"
        },
        {
          type: "list",
          items: [
            "Umusoro w'Inguzanyo wakenera kwishyurwa – Injiza 'Umusoro w'Inguzanyo wakenera kwishyurwa' watangwa mu gutanga amakuru y'umwaka w'Umusoro w'Inguzanyo wabanje.",
            "Umusoro wose wakururwa ku Mabwiriza (3%) – Injiza umubare wa WHT 3% wakururwe ku bubasha bwa musanzu.",
            "Umusoro wose wakururwa ku bintu binjizwa (5%) – Injiza umubare wa WHT 5% wakururwe ku bubasha bwa musanzu. Iki gikenera kuba kimwe n'ibintu byose byakurikiranye mu 'Umusoro wakururwa 5%'.",
            "Umusoro wose wakururwa ku bandi Mabwiriza (15% na/cyangwa 10%) – Injiza umubare w'ibindi bice byose by'umusoro wakururwa ku bubasha bwa musanzu. Ibi birimo WHT 15%, Umusoro w'Umukino na Umusoro w'Ubwishyu bw'Ubwoba. Ibi ntibibamo WHT 5% cyangwa WHT 3%."
          ]
        },
        {
          type: "paragraph",
          text: "Nyuma y'uko ibindi bikurikira byose by'umweru byinjiwe, kanda 'bika' kugira ngo ubare ibindi bikurikira by'umweru mu buryo bwikora."
        },
        {
          type: "heading",
          text: "Urugero 25"
        },
        {
          type: "paragraph",
          text: "Urugero rwo gutanga amakuru ya IQP rwinjijwe hepfo. IQP wakenera kuri uyu musanzu mu gihe cy'umusoro ni FRW 26,550."
        },
        {
          type: "paragraph",
          text: "Nyuma yo kubika ifishi ry'uko gutanga amakuru y'umiterere ya IQP, niba umusanzu atafite umusoro wakururwa kandi wakishyurwa ku bubasha bwe mu gihe cy'umusoro, kanda 'Tanga utabamo ibindi bikurikira' kugira ngo utange amakuru y'uko gutanga."
        },
        {
          type: "paragraph",
          text: "Niba umusanzu afite umusoro wakururwa kandi wakishyurwa ku bubasha bwe mu gihe cy'umusoro, kohereza ibindi bikurikira bya IQP hanyuma gereranya n'ifishi ry'uko gutanga amakuru, reba ipaji ya 107 ubwinshi ku kohereza ibindi bikurikira no kugereranya n'ifishi ry'uko gutanga amakuru."
        },
        {
          type: "heading",
          text: "Urugero 26"
        },
        {
          type: "paragraph",
          text: "Gukomeza urugero rwo gutanga amakuru ya IQP hejuru, umusanzu yafite umusoro wakururwa kandi wakishyurwa ku bubasha bwe mu gihe cy'umusoro, kandi kugereranya hagati y'iyi gutanga amakuru ya IQP n'ibindi bikurikira byakoherejwe birasobanurwa hepfo. Nk'uko ibintu byose byo kugereranya ni byo, amakuru y'uko gutanga ashobora gushimangirwa kandi gutangwa."
        },
        {
          type: "paragraph",
          text: "Nyuma y'uko ibindi bikurikira byose n'ibintu by'uko gutanga amakuru ni byo, bikwiye kandi byashimangiwe, kanda 'Tanga' amakuru y'uko gutanga. Nyuma yo gutanga neza, iyi shushanyo izakururwa."
        },
        {
          type: "paragraph",
          text: "Kanda 'Reba Icyemezo cy'Ukwemera' kugira ngo urebe inomero y'itegereza ya RRA n'umusoro wose wakenera bikenera kwishyura. Reba ipaji ya 438 ubwinshi ku kwishyura amasoro. Wibuke ko kwishyura bikwiye kandi gukorwa mbere y'umunsi w'urugero kugira ngo utazakira ibihano n'amande."
        }
      ]
    }
  };

  const currentContent = content[currentLanguage] || content.en;

  return (
    <div className="page-container">
      <div className="professional-header">
        <div className="professional-header-content">
          <div className="professional-title-container">
            <div className="professional-title-icon">
              <FileText size={24} />
            </div>
            <div className="professional-title-text">
              <h1 className="professional-main-title">{currentContent.title}</h1>
              <div className="professional-title-divider"></div>
              <p className="professional-title-description">
                Complete guide to understanding Instalment Payments in Rwanda
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content">
        <div className="content-section">
          {currentContent.content.map((item, index) => {
            if (item.type === 'paragraph') {
              return <p key={index} className="content-paragraph">{item.text}</p>;
            } else if (item.type === 'heading') {
              return <h2 key={index} className="content-heading">{item.text}</h2>;
            } else if (item.type === 'list') {
              return (
                <ul key={index} className="minimal-list">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className="content-list-item">{listItem}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default InstalmentPayments;

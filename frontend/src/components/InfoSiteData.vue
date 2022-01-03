<script lang="ts">
// export var description = {
//   headline: 'Statistic analysis',
//   content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea incidunt adipisci eligendi assumenda officiis harum et praesentium sequi, numquam quaerat doloribus esse nam deserunt odio sunt libero vitae quisquam temporibus.
//   Cumque quis enim doloribus dignissimos laborum ipsum consequatur sequi cupiditate maiores sapiente laudantium, eligendi ipsam est soluta quidem ratione sunt fuga reprehenderit accusamus porro. Obcaecati amet et assumenda facere veniam.
//   Aperiam similique`
// }
export var header = {
  title_text: 'Die Banken der Schweiz verwalteten per Ende 2020 insgesamt Vermögen in Höhe von CHF 7’878,7 Mrd. Die Schweiz ist Weltmarktführerin im grenzüberschreitenden Private Banking: Ein Viertel des weltweit grenzüberschreitend verwalteten Ver­mögens wird in der Schweiz bewirt­schaftet.',
  paragraphs: [
    'Die verwalteten Vermögen von Inlandkunden konnten 2020 um CHF 93,2 Mrd. zulegen. Die verwalteten Vermögen ausländisch domizilierter Kunden haben um CHF 108,0 Mrd. abgenommen. Insgesamt bleibt die Vermögensverwaltung der Schweizer Banken auf Vorjahresniveau (–0,2%). Die Zunahme der Wertschriften­bestände reichte nicht aus, um die Rückgänge bei den Treuhandgeldern und den Verpflichtungen gegenüber Kunden ohne Einlagen auf Sicht aufzuwiegen.',
    'Die Depotbestände nach Währungen blieben 2020 auf dem Vorjahresniveau. Der Schweizer Franken war mit einem Anteil von über 50 Prozent weiterhin die wichtigste Anlagewährung. Seit 2011 haben die verwalteten Vermögen insgesamt sukzessive zugenommen.'
  ],
  readon: {
    image: '/man_with_purse.jpg',
    headline: 'Entwicklungen im Jahr 2021',
    description: 'Verwaltete Vermögen nach dem ersten Halbjahr im Plus'
  }
}
export var footer = {
  headline: 'Verwaltete Vermögen nach dem ersten Halbjahr im Plus',
  description: 'Die verwalteten Vermögen haben nach einem leichten Rückgang 2020 in den ersten Monaten 2021 wieder zugenommen (+6,9%). Grund dafür ist ein starker Anstieg der Wertschriftenbestände (+8,2%), der durch die positive Entwicklung der Aktienmärkte getrieben ist.',
  paragraphs: [
    'Die wirtschaftliche Erholung von der COVID-19-Pandemie in den ersten Monaten 2021 macht sich auch in den verwalteten Vermögen bemerkbar. Per Ende Mai 2021 verwalteten die Banken in der Schweiz Vermögen in der Höhe von CHF 8’386,9 Mrd. Dies entspricht einer Zunahme von 6,9 Prozent seit Ende 2020. Dabei sind sowohl die Vermögen von inländisch wie auch von ausländisch domizilierten Kunden angestiegen. Verantwortlich für diese Entwicklung ist die positive Entwicklung der Aktienmärkte und die damit verbundene Zunahme der Wertschriften­bestände. Diese verzeichnen ein Plus von 8,2 Prozent, während die Verpflichtungen gegenüber den Kunden und die Treuhandverpflichtungen in den ersten Monaten 2021 wie bereits 2020 rückläufig waren. Die positive Entwicklung der Aktienmärkte zeigt sich im SMI, welcher im Juni einen neuen Höchststand von rund 12’000 Punkten erreichte. '
  ]
}

interface visual {
  name: string,
  type: string,
  filled?: boolean
}

interface content {
  name: string,
  description: string,
  paragraphs: Array<string>,
  visuals: Array<visual>,
  orientation: string
}

export var data_contents: Array<content> = [
  {
    name: 'Verwaltete Vermögen im In- und Ausland',
    description: 'Das von den Banken in der Schweiz verwaltete Vermögen verbleibt 2020 auf Vorjahresniveau (–0,2%). Die ausländischen Kunden­vermögen sind zurückgegangen. Der Zuwachs bei den inländischen Kundenvermögen konnte diese rückläufige Entwicklung nahezu ausgleichen.',
    paragraphs: [
      'Das verwaltete Vermögen setzt sich aus den Wertschriftenbeständen in Kunden­depots (CHF 6’944,0 Mrd.), Verpflich­tungen gegenüber Kunden ohne Einlagen auf Sicht (CHF 812,6 Mrd.) sowie Treuhand­verpflichtungen (CHF 122,1 Mrd.) zusammen. Die Wertschriften­bestände konnten gegenüber dem Vorjahr um rund CHF 163 Mrd. zulegen.',
      'Rückläufig waren hingegen die Treuhandverpflichtungen (–38,0%) und die Verpflichtungen gegenüber Kunden ohne Einlagen auf Sicht (–11,3%). Obwohl die Wertschriftenbestände den weitaus grössten Anteil der verwalteten Vermögen darstellen, war ihr Wachstum nicht stark genug, um die negative Entwicklung der anderen Positionen zu kompensieren.',
      'Nach dem Ausbruch der Finanz- und Wirtschaftskrise im Jahr 2008 verzeich­nete das verwaltete Vermögen einen starken Rückgang. Insbesondere die Wertschriftenbestände in Kundendepots der Banken erlitten aufgrund der stark gesunkenen Börsenkurse grosse Verluste. Seit 2011 ist das verwaltete Vermögen wieder sukzessive um CHF 2’633,6 Mrd. auf CHF 7’878,7 Mrd. im Jahr 2020 angestiegen.',
      'Der Vermögensanteil von ausländischen Kunden nahm zwischen 2010 und 2020 von 51,9 Prozent auf 46,3 Prozent ab. Der Rückgang der Vermögens­anteile von ausländischen Kunden ist auf verschiedene Gründe zurück­zuführen. Zum einen ist der Währungseffekt zu nennen. Ausländische Kunden halten einen wesentlich höheren Anteil ihrer Vermögen in Euro und Dollar als inländische Kunden. Die Vermögensanteile werden auf Basis von Schweizer Franken berechnet. Im Umfeld eines steigenden Schweizer Frankens sinkt automatisch das Vermögen der ausländischen Kunden in Relation zu den inländischen Kunden. Ein weiterer Grund könnte der Übergang zu höheren Anforderungen an die steuerliche Compliance von Bankkunden sein. Ausländische Kunden transferierten zumindest teilweise ihre Vermögen zur Regularisierung ihrer Steuersituation in ihre Heimat­länder. Trotz des Rückgangs der Vermögensanteile gegenüber den ausländischen Kunden sind die verwalteten Vermögen im gleichen Zeitraum um CHF 807,1 Mrd. angestiegen.'
    ],
    visuals: [
      {
        name:
          'Der Vermögensanteil von ausländischen Kunden nahm zwischen 2010 und 2020 von 51,9 Prozent auf 46,3 Prozent ab. Der Rückgang der Vermögens­anteile von ausländischen Kunden ist auf verschiedene Gründe zurück­zuführen. Zum einen ist der Währungseffekt zu nennen. Ausländische Kunden halten einen wesentlich höheren Anteil ihrer Vermögen in Euro und Dollar als inländische Kunden. Die Vermögensanteile werden auf Basis von Schweizer Franken berechnet. Im Umfeld eines steigenden Schweizer Frankens sinkt automatisch das Vermögen der ausländischen Kunden in Relation zu den inländischen Kunden. Ein weiterer Grund könnte der Übergang zu höheren Anforderungen an die steuerliche Compliance von Bankkunden sein. Ausländische Kunden transferierten zumindest teilweise ihre Vermögen zur Regularisierung ihrer Steuersituation in ihre Heimat­länder. Trotz des Rückgangs der Vermögensanteile gegenüber den ausländischen Kunden sind die verwalteten Vermögen im gleichen Zeitraum um CHF 807,1 Mrd. angestiegen.',
        type: 'line',
        filled: true
      },
      {
        name:
          'Zusammensetzung der verwalteten Vermögen, 2020',
        type: 'pie'
      }
    ],
    orientation: 'right'
  },
  {
    name: 'Wertschriftenbestände',
    description: 'Die Wertschriftenbestände machen den Hauptteil der verwalteten Ver­mögen aus. Die COVID-19-Pandemie führte Anfang 2020 zu Einbrüchen an der Börse, allerdings stabilisierten sich die Märkte bis Ende 2020 wieder. Dadurch resultierte trotz Krisen­jahr eine Zunahme der Wertschriften­bestände um 2,4 Prozent.',
    paragraphs: [
      'Die Wertschriftenbestände in Kunden­depots haben 2020 leicht zugenommen (+2,4%). Grund für das gegenüber dem Vorjahr moderate Wachstum ist der Einfluss der COVID-19-Pandemie auf die Kursentwick­lungen an der Börse sowie ein weiterhin starker Schweizer Franken. Der SMI ist im März 2020 zunächst von einem Stand von über 11’000 Punkten auf ca. 8’160 Punkte eingebrochen. Es folgte eine rasche Erholung mit einer Überschreitung der 10’000 Punkte-Marke im Juni 2020, wobei der Stand vor der COVID-19-Pandemie bis Ende Jahr aber uner­reicht blieb. Im Jahresverlauf hat der Schweizer Franken gegenüber dem Euro um 0,2 Prozent zugelegt, während er gegen­über dem US-Dollar um ca. 8,9 Prozent an Wert gewann.',
      'Die Wertschriftenbestände gliedern sich in die Kategorien «Aktien», «Kollektiv­anlagen», «Obligationen» und «Übrige». Nachdem im Vorjahr alle Positionen deutlich wachsen konnten, kam es im Jahr 2020 lediglich zu kleineren Verände­rungen. Die grösste Zunahme verzeich­neten die Anteile an Kollektivanlagen (+5,8%), während es bei den Obligationen zu einem Rückgang von 4,4 Prozent kam.',
      'Über das letzte Jahrzehnt konnten die Wertschriftenbestände insgesamt ein starkes Wachstum von über 50 Prozent verzeichnen. Da der Obligationen­bestand im Betrachtungszeitraum konstant blieb, ist das Wachstum der Wertschriften­bestände auf die Zunahme bei den Aktien und Kollektiv­anlagen zurückzuführen.'
    ],
    visuals: [
      {
        name:
          'Wertschriftenbestände in Kundendepots nach Art',
        type: 'bar'
      }
    ],
    orientation: 'left'
  },
  {
    name: 'Depotbestände nach Währungen',
    description: 'Die Depotbestände nach Währungen bewegen sich auf dem Vorjahres­niveau. Über die Hälfte der Depot­bestände ist in Schweizer Franken angelegt. Ein Viertel entfällt auf den US-Dollar, ein weiteres Viertel machen der Euro und die restlichen Währungen aus.',
    paragraphs: [
      'Der Frankenanteil hat sich im Jahr 2020 von 52,5 Prozent auf 52,4 Prozent leicht reduziert, bleibt aber weiterhin die bedeutendste Anlagewährung. Auch bei den anderen Währungen sind nur sehr kleine Veränderungen festzustellen. So haben der USD und der Euro im Vergleich zum Vorjahr beide um 0,1 Prozentpunkte zugenommen.',
      'Während beim Schweizer Franken rund zwei Drittel der Depotinhaber inländisch sind, ist es beim US-Dollar und beim Euro genau umgekehrt. Bei diesen zwei Währungen gehören jeweils zwei Drittel des Depotbestandes den ausländischen Depotinhabern.'
    ],
    visuals: [
      {
        name:
          'Depotbestände nach Währungen Ende 2020',
        type: 'pie'
      }
    ],
    orientation: 'right'
  }
]
</script>
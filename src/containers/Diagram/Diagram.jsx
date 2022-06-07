import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

// defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const Diagram = () => {
  return (
    <div>
      <Line
        data={{
          labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',],
          datasets: [
            {
              label: 'Количество заказов',
              data: [12, 3, 3, 5, 17, 3, 5, 7, 10, 1, 12, 15],
              backgroundColor: [
                'rgba(255, 99, 2, 0.6)',

              ],
              borderColor: [
                'white'
              ],
              borderWidth: 1,
            },
            {
              label: 'Количество заявок',
              data: [27, 32, 27, 38, 9, 30, 3, 5, 17, 3,13,3],
              backgroundColor: 'rgb(255,165,0, 0.6)',
              borderColor: 'white',
              borderWidth: 1,
            },
          ],
        }}
        height={300}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default Diagram
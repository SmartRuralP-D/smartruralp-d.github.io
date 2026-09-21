import { FlowSteps } from '@/components/landing/flow-steps'
import { OperationBenefits } from '@/components/landing/operation-benefits'

export function BenefitsSection() {
    return (
        <section id="operacao" className="bg-canvas section-padding">
            <div className="page-container">
                <div className="grid gap-8.5 min-[901px]:grid-cols-[minmax(0,7fr)_minmax(260px,4fr)] min-[901px]:items-start">
                    <div>
                        <h2 className="section-heading">
                            Informação que ajuda a <em>acompanhar.</em>
                        </h2>
                    </div>
                    <p className="max-w-97.5 text-[0.9375rem] leading-[1.7] text-text min-[901px]:mb-1 min-[901px]:ml-auto">
                        O mais importante não é a tecnologia por trás. É conseguir ver, entender e agir sobre o que acontece na operação.
                    </p>
                </div>
                <OperationBenefits />
                <FlowSteps />
            </div>
        </section>
    )
}

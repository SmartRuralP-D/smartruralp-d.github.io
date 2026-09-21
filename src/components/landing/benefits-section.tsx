import { FlowSteps } from '@/components/landing/flow-steps'
import { OperationBenefits } from '@/components/landing/operation-benefits'

export function BenefitsSection() {
    return (
        <section id="operacao" className="bg-canvas section-padding">
            <div className="page-container">
                <div>
                    <h2 className="section-heading">
                        Informação que ajuda a <em>acompanhar.</em>
                    </h2>
                </div>
                <OperationBenefits />
                <FlowSteps />
            </div>
        </section>
    )
}

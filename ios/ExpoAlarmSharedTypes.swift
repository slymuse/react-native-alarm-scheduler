// coloredstone(spec-045): Widget Extension과 공유하는 AlarmKit 메타데이터 타입.
//
// Live Activity 위젯 익스텐션이 ActivityConfiguration(for: AlarmAttributes<ExpoAlarmMetadata>)를
// 선언하려면 이 타입이 익스텐션 타깃에서도 보여야 한다 — 별도 파일로 분리해 두 타깃(pod + 익스텐션
// 소스 포함)이 같은 정의를 쓰고, public으로 열어 모듈 경계를 넘는다.
// 표면 최소화: 이 파일의 두 타입만 public. values dict가 LA 데이터 계약(phrase·accentHex·modeName —
// spec-045 'LA 뷰 정식 디자인 스코프')을 나른다.

import Foundation

#if canImport(AlarmKit)
import AlarmKit

@available(iOS 26.0, *)
public struct ExpoAlarmMetadata: AlarmMetadata {
  public let alarmId: String
  public let title: String
  public let values: [String: ExpoAlarmMetadataValue]

  public init(alarmId: String, title: String, values: [String: ExpoAlarmMetadataValue]) {
    self.alarmId = alarmId
    self.title = title
    self.values = values
  }
}
#endif

public enum ExpoAlarmMetadataValue: Codable, Hashable, Sendable {
  case string(String)
  case number(Double)
  case bool(Bool)

  public init(from decoder: Decoder) throws {
    let container = try decoder.singleValueContainer()
    if let value = try? container.decode(Bool.self) {
      self = .bool(value)
    } else if let value = try? container.decode(Double.self) {
      self = .number(value)
    } else {
      self = .string(try container.decode(String.self))
    }
  }

  public func encode(to encoder: Encoder) throws {
    var container = encoder.singleValueContainer()
    switch self {
    case .string(let value):
      try container.encode(value)
    case .number(let value):
      try container.encode(value)
    case .bool(let value):
      try container.encode(value)
    }
  }
}
